import {Injectable} from "@angular/core";
import {FirebasePageEnum} from "~app/shared/enums";
import {from, map, Observable, take} from "rxjs";
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
    return this.db
      .object<T>(`/pages/${page}`)
      .valueChanges()
      .pipe(take(1));
  }

  public fetchProject(page: FirebasePageEnum, projectUrl: string): Observable<ProjectContent> {
    return this.db
      .list<ProjectContent>(
        "/pages/" + page + "/projects",
        (ref: DatabaseReference) =>
          ref.orderByChild("url").equalTo(projectUrl)
      )
      .valueChanges()
      .pipe(
        take(1),
        map(arrayFirst)
      );
  }

  public updatePage<T>(page: FirebasePageEnum, content: T): Observable<void> {
    return from(this.db.object(`/pages/${page}`).update(content));
  }
}
