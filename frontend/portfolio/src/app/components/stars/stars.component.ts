import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CelestialPosition, ClientScreen, Position2D, Spacetime, Star } from '~app/components/stars/interfaces/star';
import { StarsService } from '~app/components/stars/shared/services/stars.service';
import { StarObject } from '~app/components/stars/interfaces';
import { StarWanderer } from '~app/components/stars/interfaces/star-wanderer';
import { StarConfig } from '~app/components/stars/interfaces/star-config';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  /**
   * The canvas element
   */
  @ViewChild('astronaut', { static: true })
  public astronaut: ElementRef<HTMLImageElement>;

  /**
   * The canvas element
   */
  @ViewChild('canvasElement', { static: true })
  public canvas: ElementRef<HTMLCanvasElement>;

  /**
   * The 2D-context of the canvas element
   */
  private context: CanvasRenderingContext2D;

  /**
   * Configuration for the stars.
   * @private
   */
  private config: StarConfig;

  private scale: number = 1; // The device's pixel-ratio, which might change on resize.
  private readonly screen: ClientScreen = { w: 0, h: 0 };
  private readonly pointer: Position2D = { x: null, y: null };

  /**
   * The list of stars that we need to re-render on each step
   * @private
   */
  private stars: Star[] = [];

  /**
   * The elements to render every time
   * @private
   */
  private wanderers: StarWanderer[] = [];

  /**
   * Velocity of each star
   * @private
   */
  private velocity: Spacetime = {
    x: 0,
    y: 0,
    xMomentum: 0,
    yMomentum: 0,
    z: 0.0005
  };

  private isTouchscreen = false;

  constructor () {
    this.config = {
      moveEaseness: 70,
      starDensity: 0.125,
      colorLimit: 400,
      size: 3,
      starMinScale: 0.1,
      overflow: 100,
      zVelocity: 0.005,
      maxImgSize: 480,
      imgSizeStep: 0.3,
      initialImgSize: 0
    };
  }

  public ngOnInit () {
    this.context = this.canvas.nativeElement.getContext('2d');

    this.generate();
    this.resize();
    this.step();

    window.onresize = this.resize;
    document.onmousemove = this.onMouseMove;
    document.onmouseleave = this.onMouseLeave;
    document.ontouchmove = this.onTouchMove;
    document.ontouchend = this.onMouseLeave;

    StarsService.objects$.subscribe((objects: StarObject) => {
      const wanderers: StarWanderer[] = [];

      if (objects.astronaut) {
        const img = this.astronaut.nativeElement;
        const wanderer: StarWanderer = {
          img: img,
          x: this.screen.w / (2 + 0.5 * Math.random()),
          y: this.screen.h / (2 + 0.5 * Math.random()),
          z: this.config.zVelocity * 100,
          size: this.config.maxImgSize
        };
        wanderers.push(wanderer);
      }
      this.wanderers = wanderers;
    });
  }


  private placeStar = (star: Star) => {

    star.x = Math.random() * this.screen.w;
    star.y = Math.random() * this.screen.h;

  };

  private step = () => {

    this.context.clearRect(0, 0, this.screen.w, this.screen.h);

    this.update();
    this.render();

    requestAnimationFrame(this.step);

  };

  private onMouseLeave = () => {
    this.pointer.x = this.pointer.y = null;
  };

  private onTouchMove = (event) => {

    this.isTouchscreen = true;

    this.movePointer(event.touches[0].clientX, event.touches[0].clientY);

  };

  private onMouseMove = (event) => {

    this.isTouchscreen = false;

    this.movePointer(event.clientX, event.clientY);

  };

  private resize = () => {

    this.scale = window.devicePixelRatio || 1;

    this.screen.w = window.innerWidth * this.scale;
    this.screen.h = window.innerHeight * this.scale;

    this.canvas.nativeElement.width = this.screen.w;
    this.canvas.nativeElement.height = this.screen.h;

    this.stars.forEach(this.placeStar);

  };

  private updatePosition = (body: StarWanderer | Star, isWanderer: boolean = true) => {

    body.x += this.velocity.x * body.z;
    body.y += this.velocity.y * body.z;

    body.x += (body.x - this.screen.w / 2) * this.velocity.z * body.z;
    body.y += (body.y - this.screen.h / 2) * this.velocity.z * body.z;
    body.z += this.velocity.z;

    // recycle when out of bounds
    if (
      body.x < -this.config.overflow ||
      body.x > this.screen.w + this.config.overflow ||
      body.y < -this.config.overflow ||
      body.y > this.screen.h + this.config.overflow
    ) {
      if (isWanderer) {
        (body as StarWanderer).size = 0;
      }
      this.recycleBody(body);
    }

  };

  private recycleBody = (body: CelestialPosition) => {

    let direction = 'z';

    const vx = Math.abs(this.velocity.x);
    const vy = Math.abs(this.velocity.y);

    if (vx > 1 || vy > 1) {
      let axis: string;

      if (vx > vy) {
        axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
      } else {
        axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
      }

      if (axis === 'h') {
        direction = this.velocity.x > 0 ? 'l' : 'r';
      } else {
        direction = this.velocity.y > 0 ? 't' : 'b';
      }
    }

    body.z = this.config.starMinScale + Math.random() * (1 - this.config.starMinScale);

    if (direction === 'z') {
      body.z = 0.1;
      body.x = Math.random() * this.screen.w;
      body.y = Math.random() * this.screen.h;
    } else if (direction === 'l') {
      body.x = -this.config.overflow;
      body.y = this.screen.h * Math.random();
    } else if (direction === 'r') {
      body.x = this.screen.w + this.config.overflow;
      body.y = this.screen.h * Math.random();
    } else if (direction === 't') {
      body.x = this.screen.w * Math.random();
      body.y = -this.config.overflow;
    } else if (direction === 'b') {
      body.x = this.screen.w * Math.random();
      body.y = this.screen.h + this.config.overflow;
    }

  };

  private wandererSize = (wanderer: StarWanderer) => {
    wanderer.size = Math.min(wanderer.size + this.config.imgSizeStep, this.config.maxImgSize);
  }

  private generate () {

    const starCount = (window.innerWidth + window.innerHeight) * this.config.starDensity;

    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: 0,
        y: 0,
        z: this.config.starMinScale + Math.random() * (1 - this.config.starMinScale),
        color: this.randomStarColor()
      });

    }
  }


  private update () {
    if (Math.abs(this.velocity.xMomentum) > 0.01) {
      this.velocity.xMomentum *= 0.96;
      this.velocity.yMomentum *= 0.96;
    }

    this.velocity.x += (this.velocity.xMomentum - this.velocity.x) * 0.8;
    this.velocity.y += (this.velocity.yMomentum - this.velocity.y) * 0.8;

    this.stars.forEach((star: Star) => this.updatePosition(star));
    this.wanderers.forEach((wanderer: StarWanderer) => this.updatePosition(wanderer, true));
    this.wanderers.forEach(this.wandererSize);

  }

  private render () {

    this.wanderers.forEach((wanderer: StarWanderer) => {
      // this.context.globalAlpha = wanderer.opacity;
      this.context.drawImage(wanderer.img, wanderer.x, wanderer.y, wanderer.size, wanderer.size);
    });

    this.stars.forEach((star: Star) => {

      this.context.beginPath();
      this.context.lineCap = 'round';
      this.context.lineWidth = this.config.size * star.z * this.scale;

      // Make stars twinkle
      this.context.strokeStyle = `rgba(${ star.color },${ (0.5 + 0.5 * Math.random()) }`;

      this.context.beginPath();
      this.context.moveTo(star.x, star.y);

      let tailX = this.velocity.x * 2;
      let tailY = this.velocity.y * 2;

      // stroke() wont work on an invisible line
      if (Math.abs(tailX) < 0.1) {
        tailX = 0.5;
      }
      if (Math.abs(tailY) < 0.1) {
        tailY = 0.5;
      }

      this.context.lineTo(star.x + tailX, star.y + tailY);

      this.context.stroke();

    });

  }

  private movePointer (x: number, y: number) {
    if (+this.pointer.x + +this.pointer.y) {

      const ox: number = x - this.pointer.x;
      const oy: number = y - this.pointer.y;

      this.velocity.xMomentum = this.velocity.xMomentum + ox / this.config.moveEaseness * this.scale * (this.isTouchscreen ? 1 : -1);
      this.velocity.yMomentum = this.velocity.yMomentum + oy / this.config.moveEaseness * this.scale * (this.isTouchscreen ? 1 : -1);

    }
    this.pointer.x = x;
    this.pointer.y = y;
  }

  private randomStarColor (): string {
    const r = 50 + Math.floor(200 * Math.random());
    let g = 30 + Math.floor(170 * Math.random());
    if (g * 1.3 > r) {
      g = r / 3;
    }
    const b = g / 5;
    if (r + g + b < this.config.colorLimit) {
      const rand = Math.random();
      if (rand > 0.7) {
        // blue star
        return `${ rand * 255 },${ rand * 255 },255`;
      }
      return '255,255,255';
    }
    return `${ r },${ g },${ b }`;
  }

}
