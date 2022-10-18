import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import {FirebasePageEnum} from "~app/shared/enums";
import {FirebaseApiService} from "~app/services/firebase-api.service";
import {LinksPage} from "~home-page/pages/links/interfaces";


@Injectable()
export class LinksPageResolver implements Resolve<unknown> {

  constructor(
    private firebaseApi: FirebaseApiService
  ) {
  }

  public resolve(): Observable<LinksPage> {
    return this.firebaseApi.fetchPageDocument(FirebasePageEnum.LINKS);
  }
}
