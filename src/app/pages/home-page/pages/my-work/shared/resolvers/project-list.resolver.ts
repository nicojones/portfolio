import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";


import {MyWorkPage} from "~home-page/pages/my-work/shared/interfaces";
import {FirebasePageEnum} from "~app/shared/enums";
import {FirebaseApiService} from "~app/services/firebase-api.service";


@Injectable()
export class ProjectListResolver implements Resolve<unknown> {

  constructor(
    private readonly firebaseApi: FirebaseApiService
  ) {
  }

  public resolve(): Observable<MyWorkPage> {
    return this.firebaseApi.fetchPageDocument(FirebasePageEnum.WORK);
  }
}
