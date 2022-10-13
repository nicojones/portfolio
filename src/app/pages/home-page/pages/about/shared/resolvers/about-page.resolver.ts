import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";

import {AboutPage} from "~home-page/pages/about/interfaces/about-page";
import {FirebaseApiService} from "~app/services/firebase-api.service";
import {FirebasePageEnum} from "~app/shared/enums";


@Injectable()
export class AboutPageResolver implements Resolve<AboutPage> {

  constructor(
    private readonly firebaseApi: FirebaseApiService
  ) {
  }

  public resolve(): Observable<AboutPage> {
    return this.firebaseApi.fetchPageDocument(FirebasePageEnum.ABOUT);
  }
}
