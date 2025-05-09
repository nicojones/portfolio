import {Injectable} from "@angular/core";
import {ArticleGroup, FirebasePageEnum} from "~app/shared/enums";
import {from, map, Observable, of} from "rxjs";
import {PocketbaseItem, PocketbaseResult, ProjectContent} from "~app/shared/interfaces";
import {arrayFirst} from "~app/functions";
import {ProjectsPage} from "~home-page/pages/projects/shared/interfaces";
import PocketBase from "pocketbase";
import {environment} from "~env/environment";

@Injectable()
export class PocketbaseApiService {

  private readonly pb = new PocketBase(environment.pocketBase);

  constructor() {
  }

  public fetchPageDocument<T = any>(page: FirebasePageEnum): Observable<PocketbaseItem<T>> {
    return (from(this.pb.records.getList("page", 1, 1, {
      filter: `route="${page}"`
    })) as unknown as Observable<PocketbaseResult<T>>)
      .pipe(
        map((l: PocketbaseResult<T>) => l.items[0])
      );
  }


  public fetchPageDocument_OLD<T = any>(page: FirebasePageEnum, expandFields: string): Observable<PocketbaseItem<T>> {
    return (from(this.pb.records.getList(page, 1, 1, {
      filter: "",
      expand: expandFields
    })) as unknown as Observable<PocketbaseResult<T>>)
      .pipe(
        map((l: PocketbaseResult<T>) => this.extractExpanded<T>(l.items)),
        map((items: PocketbaseItem<T>[]) => arrayFirst(items as unknown[]) as PocketbaseItem<T>)
      );
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
    return of(null);
  }

  private extractExpanded<T = any>(items: PocketbaseItem<T>[]): PocketbaseItem<T>[] {
    if (items && items.forEach) {
      items.forEach((item: PocketbaseItem<T>) => {
        const keys = Object.keys(item["@expand"]);
        if (keys.length) {
          for (let i = 0, len = keys.length; i < len; ++i) {
            item[keys[i]] = this.extractExpanded(item["@expand"][keys[i]]);
          }
        }
      });
    }
    return items;
  }
}
