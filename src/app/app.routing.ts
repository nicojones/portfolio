import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MyRoutes} from "~routes/routes";
import {NotFoundComponent} from "~app/components/not-found/not-found.component";
import {redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([MyRoutes.LOGIN]);
const redirectLoggedInToSendEmail = () => redirectLoggedInTo([MyRoutes.ADMIN]);

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        loadChildren: () => import("~home-page/public-pages.module").then((m) => m.PublicPagesModule)
      },
      {
        path: MyRoutes.LOGIN,
        loadChildren: () => import("~login/login.module").then((m) => m.LoginModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectLoggedInToSendEmail}
      },
      {
        path: MyRoutes.ADMIN,
        loadChildren: () => import("~admin/admin.module").then((m) => m.AdminModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ], {relativeLinkResolution: "legacy"})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {
}
