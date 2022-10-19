import {Injectable} from "@angular/core";
import {ArticleGroup, FirebasePageEnum} from "~app/shared/enums";
import {from, map, Observable, take} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {ProjectContent} from "~app/shared/interfaces";
import {arrayFirst} from "~app/functions";
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
    article: ArticleGroup = null
  ): Observable<ProjectsPage> {
    return this.fetchPageDocument<ProjectsPage>(firebasePage);
  }

  public fetchProject(page: FirebasePageEnum, projectUrl: string): Observable<ProjectContent> {
    return this.getProjects(page)
      .pipe(
        map((project: ProjectsPage) => project.projects.filter((p: ProjectContent) => p.url === projectUrl)),
        map(arrayFirst)
      );
  }

  public updatePage<T>(page: FirebasePageEnum, content: T): Observable<void> {
    return from(this.db.object(`/pages/${page}`).update(content));
  }
}
