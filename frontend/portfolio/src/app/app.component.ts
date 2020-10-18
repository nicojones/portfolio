import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slide } from '~app/shared/animations';
import { detectAndSaveOS } from '~app/functions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide()]
})
export class AppComponent {
  constructor () {
    detectAndSaveOS();
  }
}
