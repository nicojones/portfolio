import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Routes } from '~routes/routes';

import { slide } from '~app/shared/animations';
import { AppTitleService, getLocalStorage } from '~app/services';
import { detectAndSaveOS } from '~app/functions';
import { AuthGuard } from '~app/services/guards/auth.guard';
import { NavigationEnd, Router } from '@angular/router';
import { StorageKey } from '~app/shared/enums';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide()]
})
export class AppComponent {
  public readonly Routes = Routes;

  /**
   * Toggle to disable stars.
   */
  public stars: boolean;

  public isAuthed$ = AuthGuard.loggedIn$;

  // noinspection JSUnusedLocalSymbols
  constructor (
    private title: AppTitleService,
    private router: Router
  ) {
    const clientOS = detectAndSaveOS();
    AppTitleService.title.setTitle('Nicolas Kupfer');

    this.stars = !(getLocalStorage().getItem(StorageKey.Stars) === false);

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    document.body.classList.add(clientOS.isMobile ? 'mobile' : 'desktop');
  }

  public toggleStars (): void {
    this.stars = !this.stars;
    getLocalStorage().setItem(StorageKey.Stars, this.stars);
  }
}
