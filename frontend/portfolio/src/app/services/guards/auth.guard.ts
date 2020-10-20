import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { getLocalStorage } from '~app/services';
import { StorageKey } from '~app/shared/enums';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Routes } from '~routes/routes';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate {

  public static loggedIn$ = new BehaviorSubject<boolean>(!!getLocalStorage().getItem(StorageKey.Auth));

  constructor (
    private snackbar: MatSnackBar,
    private router: Router
  ) {
  }

  /**
   * @returns - Permission to activate route
   */
  private isAuthed (): boolean {
    if (getLocalStorage().getItem(StorageKey.Auth)) {
      AuthGuard.loggedIn$.next(true);
      return true;
    } else {
      this.snackbar.open('Not authed', 'dismiss');
      this.router.navigateByUrl(Routes.absolute('Home'));
      AuthGuard.loggedIn$.next(false);
      return false;
    }
  }

  /**
   * @returns - Permission to lazy load module
   */
  public canLoad (): boolean | Promise<boolean> {
    return this.isAuthed();
  }

  /**
   * @returns - Permission to activate route
   */
  public canActivate (): boolean | Promise<boolean> {
    return this.isAuthed();
  }


}
