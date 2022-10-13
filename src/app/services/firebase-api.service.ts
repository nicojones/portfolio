import {Injectable} from "@angular/core";
import {FirebasePageEnum} from "~app/shared/enums";
import {from, map, Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {ProjectContent} from "~app/shared/interfaces";
import {arrayFirst} from "~app/functions";
import {DatabaseReference} from "@angular/fire/compat/database/interfaces";

@Injectable({providedIn: "root"})
export class FirebaseApiService {

  constructor(
    private readonly db: AngularFireDatabase
  ) {
  }

  public fetchPageDocument<T = any>(page: FirebasePageEnum): Observable<T> {
    return this.db.object<T>(`/pages/${page}`).valueChanges();
  }

  public fetchProject(projectUrl: string): Observable<ProjectContent> {
    return this.db.list<ProjectContent>(
      "/pages/" + FirebasePageEnum.WORK + "/projects",
      (ref: DatabaseReference) =>
        ref.orderByChild("url").equalTo(projectUrl)
    ).valueChanges()
      .pipe(
        map(arrayFirst)
      );
  }

  public updatePage<T>(page: FirebasePageEnum, content: T): Observable<void> {
    return from(this.db.object(`/pages/${page}`).update(content));
  }
}
