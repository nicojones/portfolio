import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginData} from "~login/shared/interfaces";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {RouteUrls} from "~routes/routes";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public readonly RouteUrls = RouteUrls;

  public loginError: any;

  public form: FormGroup<LoginData<FormControl<string>>>;

  constructor(
    private router: Router,
    private snackbar: MatSnackBar,
    private readonly firebaseLogin: AngularFireAuth,
    private readonly ref: ChangeDetectorRef
  ) {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  public login() {
    const value: LoginData = this.form.value as LoginData;
    this.loginError = null;

    this.firebaseLogin.signInWithEmailAndPassword(value.username, value.password)
      .then((a) => {
        this.router.navigate([`/${RouteUrls.ADMIN}`]);
      })
      .catch((error) => {
        this.loginError = error;

        this.ref.markForCheck();
      });
  }


}
