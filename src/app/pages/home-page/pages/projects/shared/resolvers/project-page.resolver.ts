import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";


import {ProjectRoutingData, ProjectsPage} from "~home-page/pages/projects/shared/interfaces";
import {FirebaseApiService} from "~app/services/firebase-api.service";


@Injectable()
export class ProjectPageResolver implements Resolve<unknown> {

  constructor(
    private readonly firebaseApi: FirebaseApiService
  ) {
  }

  public resolve(snapshot: ActivatedRouteSnapshot): Observable<ProjectsPage> {
    return this.firebaseApi.getProjects(
      (snapshot.parent.data as ProjectRoutingData).page,
      (snapshot.parent.data as ProjectRoutingData).article
    );
  }
}
