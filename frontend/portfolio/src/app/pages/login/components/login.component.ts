import { Component } from '@angular/core';
import { LoginService } from '~login/services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginData } from '~login/shared/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Routes } from '~routes/routes';
import { getLocalStorage } from '~app/services';
import { StorageKey } from '~app/shared/enums';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;

  constructor (
    private router: Router,
    private service: LoginService,
    private snackbar: MatSnackBar
  ) {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  public onSave () {
    const value: LoginData = this.form.value;
    this.service
      .doLogin(value)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.snackbar.open('error from BE', null, {
            duration: 2000
          });
          return throwError(error);
        })
      )
      .subscribe((response: { auth: string }) => {
        getLocalStorage().setItem(StorageKey.Auth, { Authorization: response.auth });
        this.snackbar.open('Logged in', null, { duration: 2000 });
        this.router.navigateByUrl(Routes.absolute('Admin'));
      });
  }


}
