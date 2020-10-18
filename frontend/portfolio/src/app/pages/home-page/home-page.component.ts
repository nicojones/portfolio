import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slide } from '~app/shared/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide()]
})
export class HomePageComponent {

}
