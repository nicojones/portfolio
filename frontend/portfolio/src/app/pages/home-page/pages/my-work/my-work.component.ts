import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { slideIn } from '~app/shared/animations';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class MyWorkComponent implements OnInit {

  constructor () { }

  ngOnInit (): void {
  }

}
