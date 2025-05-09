import {Component, Input, OnInit, TemplateRef, ViewChild} from "@angular/core";


@Component({
  selector: "app-back-title",
  templateUrl: "./back-title.component.html",
  styleUrls: ["./back-title.component.scss"]
})
export class BackTitleComponent implements OnInit {

  @Input()
  public url: string;

  @Input()
  public huge = true;

  @ViewChild("title", {static: true})
  public titleRef: TemplateRef<any>;

  public ngOnInit() {
    // const el = this.titleRef.elementRef.nativeElement;
    // const observer = new IntersectionObserver(
    //   ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    //   {threshold: [1]}
    // );
    //
    // observer.observe(el);
  }

}
