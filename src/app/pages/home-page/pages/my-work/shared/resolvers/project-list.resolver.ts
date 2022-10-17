import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";


import {ProjectsPage} from "~home-page/pages/my-work/shared/interfaces";
import {FirebaseApiService} from "~app/services/firebase-api.service";


@Injectable()
export class ProjectListResolver implements Resolve<unknown> {

  constructor(
    private readonly firebaseApi: FirebaseApiService
  ) {
  }

  public resolve(snapshot: ActivatedRouteSnapshot): Observable<ProjectsPage> {
    return this.firebaseApi.fetchPageDocument(snapshot.parent.data.page);
  }
}
