import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { StorageKey } from '~app/shared/enums';
import { getLocalStorage } from '~app/services';
import { ClientOs } from '~app/shared/interfaces';
import { fadeIn, Timings } from '~app/shared/animations';

import { HomePage } from '~home-page/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn(Timings.FadeInStaggerSlow)]
})
export class HomePageComponent {

  public showMenu: boolean = false;

  public clientOs: ClientOs = getLocalStorage().getItem<ClientOs>(StorageKey.ClientOS);

  public homePage: HomePage = this.route.snapshot.data.homePage;

  public constructor (
    private route: ActivatedRoute
  ) {}

  public toggleMenu () {
    if (this.clientOs.isMobile) {
      this.showMenu = !this.showMenu;
    }
  }
}
