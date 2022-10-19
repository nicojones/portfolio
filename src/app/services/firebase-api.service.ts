import {Injectable} from "@angular/core";
import {ArticleGroup, FirebasePageEnum} from "~app/shared/enums";
import {from, map, Observable, take, zip} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {ProjectContent} from "~app/shared/interfaces";
import {arrayFirst} from "~app/functions";
import {DatabaseReference} from "@angular/fire/compat/database/interfaces";
import {ProjectsPage} from "~home-page/pages/projects/shared/interfaces";

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

  public getProjects(
    firebasePage: FirebasePageEnum,
    article: ArticleGroup
  ): Observable<ProjectsPage> {
    return zip(
      this.fetchPageDocument<ProjectsPage>(firebasePage),
      this.db
        .list<ProjectContent>(
          "/articles",
          ref => ref.orderByChild("section").equalTo(article)
        )
        .valueChanges()
        .pipe(take(1))
    ).pipe(
      map(([page, projects]: [ProjectsPage, ProjectContent[]]) => ({
        ...page,
        projects: projects
      }))
    )
      ;
  }

  public fetchProject(articleGroup: ArticleGroup, projectUrl: string): Observable<ProjectContent> {
    return this.db
      .list<ProjectContent>(
        "/articles",
        (ref: DatabaseReference) =>
          ref.orderByChild("section").equalTo(articleGroup)
      )
      .valueChanges()
      .pipe(
        take(1),
        map((projects: ProjectContent[]) => projects.filter((p: ProjectContent) => p.url === projectUrl)),
        map(arrayFirst)
      );
  }

  public updatePage<T>(page: FirebasePageEnum, content: T): Observable<void> {
    return from(this.db.object(`/pages/${page}`).update(content));
  }
}
