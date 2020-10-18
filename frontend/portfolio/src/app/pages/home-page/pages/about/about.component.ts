import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { slideIn } from '~app/shared/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class AboutComponent implements OnInit {

  constructor () { }

  ngOnInit (): void {
  }

}
