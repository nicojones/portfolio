import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { getLocalStorage } from '~app/services';
import { StorageKey } from '~app/shared/enums';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Routes } from '~routes/routes';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate {

  public static auth$ = new BehaviorSubject<string>(getLocalStorage().getItem(StorageKey.Auth));

  constructor (
    private snackbar: MatSnackBar,
    private router: Router
  ) {
  }

  /**
   * @returns - Permission to activate route
   */
  private isAuthed (): boolean {
    const auth = getLocalStorage().getItem<string>(StorageKey.Auth);
    if (auth) {
      AuthGuard.auth$.next(auth);
      return true;
    } else {
      this.snackbar.open('Not authed', 'dismiss');
      this.router.navigateByUrl(Routes.url('Login'));
      AuthGuard.auth$.next(null);
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
