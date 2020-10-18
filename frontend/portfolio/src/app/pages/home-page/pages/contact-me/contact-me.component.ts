import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { slideIn } from '~app/shared/animations';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class ContactMeComponent implements OnInit {

  constructor () { }

  ngOnInit (): void {
  }

}
