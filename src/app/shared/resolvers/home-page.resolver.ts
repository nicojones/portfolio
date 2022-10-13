import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import {HomePage} from "~home-page/interfaces";
import {FirebasePageEnum} from "~app/shared/enums";
import {FirebaseApiService} from "~app/services/firebase-api.service";


@Injectable()
export class HomePageResolver implements Resolve<unknown> {

  constructor(
    private firebaseApi: FirebaseApiService
  ) {
  }

  public resolve(): Observable<HomePage> {
    return this.firebaseApi.fetchPageDocument(FirebasePageEnum.HOME);
  }
}
