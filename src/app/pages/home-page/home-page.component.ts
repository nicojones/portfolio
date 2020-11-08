import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { StorageKey } from '~app/shared/enums';
import { getLocalStorage } from '~app/services';
import { ClientOs } from '~app/shared/interfaces';
import { fadeIn, slideUnder } from '~app/shared/animations';

import { HomePage } from '~home-page/interfaces';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideUnder(), fadeIn()]
})
export class HomePageComponent {

  /**
   * Changing this value will _permanently_ show the the menu <--> the intro
   */
  public static showMenu$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /**
   * Info about the client's OS and browser.
   */
  public clientOs: ClientOs = getLocalStorage().getItem<ClientOs>(StorageKey.ClientOS);

  /**
   * Data for the home page
   */
  public homePage: HomePage = this.route.snapshot.data.homePage;

  /**
   * Getter for the static value (used in the view)
   */
  public get showMenu(): number {
    return HomePageComponent.showMenu$.value;
  }

  public constructor (
    private route: ActivatedRoute
  ) {}

  public toggleMenu () {
    // Only for mobile devices... NOT for desktops.
    HomePageComponent.showMenu$.next(this.showMenu + 1);
  }
}
