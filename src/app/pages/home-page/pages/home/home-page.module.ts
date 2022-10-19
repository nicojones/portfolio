import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "~home-page/pages/home/home-page.component";
import {HomePageResolver} from "~app/shared/resolvers";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePageComponent,
        resolve: {
          homePage: HomePageResolver
        }
      }
    ])
  ],
  providers: [
    HomePageResolver
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomePageModule {
}
