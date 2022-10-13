import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {Routes, RouteUrls} from "~routes/routes";
import {NotFoundComponent} from "~app/components/not-found/not-found.component";
import {redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([RouteUrls.LOGIN]);
const redirectLoggedInToSendEmail = () => redirectLoggedInTo([RouteUrls.ADMIN]);

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: Routes.HOME,
        loadChildren: () => import("~home-page/home-page.module").then((m) => m.HomePageModule)
      },
      {
        path: Routes.READING,
        loadChildren: () => import("~goodreads/goodreads.module").then((m) => m.GoodreadsModule)
      },
      {
        path: Routes.LOGIN,
        loadChildren: () => import("~login/login.module").then((m) => m.LoginModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectLoggedInToSendEmail}
      },
      {
        path: Routes.ADMIN,
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
