import { NavigationEnd, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MyRoutes, Routes, RouteUrls } from '~routes/routes';

import { slide } from '~app/shared/animations';
import { StorageKey } from '~app/shared/enums';
import { detectAndSaveOS } from '~app/functions';
import { AuthGuard } from '~app/services/guards/auth.guard';
import { AppTitleService, getLocalStorage } from '~app/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide()]
})
export class AppComponent {
  /**
   * The Absolute (real-path) URL
   */
  public readonly absolute = Routes.url;

  /**
   * Only the routes, no functions.
   */
  public readonly RouteKeys: (keyof MyRoutes)[] = Object.keys(RouteUrls) as (keyof MyRoutes)[];

  /**
   * Toggle to disable stars.
   */
  public stars: boolean;

  /**
   * The authentication status.
   */
  public auth$ = AuthGuard.auth$;

  constructor (
    private title: AppTitleService,
    private router: Router
  ) {
    // Client OS - detect and save it if it's not in the local storage.
    detectAndSaveOS();
    // Name of the app
    AppTitleService.title.setTitle('Nicolas Kupfer'); // TODO -> Read from a resolver.

    // The visibility state of the stars/canvas.
    this.stars = !(getLocalStorage().getItem(StorageKey.Stars) === false);

    // Re-scroll the window to the top when the route changes.
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

  }

  public toggleStars (): void {
    this.stars = !this.stars;
    getLocalStorage().setItem(StorageKey.Stars, this.stars);
  }
}
