import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";


import {FirebaseApiService} from "~app/services/firebase-api.service";
import {ProjectContent} from "~app/shared/interfaces";
import {ProjectRoutingData} from "~home-page/pages/projects/shared/interfaces";


@Injectable()
export class ProjectResolver implements Resolve<unknown> {

  constructor(
    private readonly firebaseApi: FirebaseApiService
  ) {
  }

  public resolve(snapshot: ActivatedRouteSnapshot): Observable<ProjectContent> {
    const projectUrl = snapshot.paramMap.get("projectUrl");
    return this.firebaseApi.fetchProject((snapshot.parent.data as ProjectRoutingData).page, projectUrl);
  }
}
