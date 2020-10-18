import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeIn, slide, slideIn, Timings } from '~app/shared/animations';
import { ClientOs } from '~app/shared/interfaces';
import { getLocalStorage } from '~app/services';
import { StorageKey } from '~app/shared/enums';
import { Routes } from '~routes/routes';


@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide(), slideIn(), fadeIn(Timings.FadeInStaggerSlow)]
})
export class HomePageComponent {
  public readonly Routes = Routes;

  public showMenu: boolean = false;

  public clientOs: ClientOs = getLocalStorage().getItem<ClientOs>(StorageKey.ClientOS);

  public toggleMenu () {
    if (this.clientOs.isMobile) {
      this.showMenu = !this.showMenu;
    }
  }
}
