import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject} from "@angular/core";

import {MyRoutes, Routes, RouteUrls} from "~routes/routes";

import {StorageKey} from "~app/shared/enums";
import {detectAndSaveOS} from "~app/functions";
import {AppTitleService, getLocalStorage} from "~app/services";
import {environment} from "~env/environment";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: []
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
  public auth = false;

  constructor(
    private route: ActivatedRoute,
    private title: AppTitleService,
    private router: Router,
    @Inject("Window") private readonly window: Window,
    private readonly ref: ChangeDetectorRef,
    private readonly fireAuth: AngularFireAuth,
    private readonly snackBar: MatSnackBar
  ) {
    // Client OS - detect and save it if it's not in the local storage.
    detectAndSaveOS();
    // Name of the app
    AppTitleService.title.setTitle(environment.pageTitle);

    // The visibility state of the stars/canvas.
    this.stars = !(getLocalStorage().getItem(StorageKey.Stars) === false);

    // Re-scroll the window to the top when the route changes.
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.window.scrollTo(0, 0);
    });

    this.fireAuth.authState
      .subscribe((state: any) => {
        this.auth = !!state;
        this.ref.markForCheck();
      });

  }

  /**
   * Show and hide the CANVAS with the stars.
   */
  public toggleStars(): void {
    this.stars = !this.stars;
    getLocalStorage().setItem(StorageKey.Stars, this.stars);
  }

  public logout(): void {
    this.fireAuth
      .signOut()
      .then(() => {
        this.snackBar.open("Logged out", null, {duration: 3000});
        this.router.navigate([`/${RouteUrls.HOME}`]);
      });
  }
}
