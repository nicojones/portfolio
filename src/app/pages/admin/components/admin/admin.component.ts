import {ChangeDetectorRef, Component, Inject, ViewChild} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {AbstractControl, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

import {MyRoutes} from "~routes/routes";

import {AdminService} from "~admin/services";
import {MainFormArray, MainFormGroup} from "~app/shared/classes";
import {ArticleGroup, FirebasePageEnum, SocialIcons} from "~app/shared/enums";

import {HomePage} from "~home-page/interfaces";
import {ProjectsPage} from "~home-page/pages/projects/shared/interfaces";
import {FirebaseApiService} from "~app/services/firebase-api.service";
import { LinksPageLink} from "~home-page/pages/links/interfaces";
import {ActivatedRoute} from "@angular/router";
import {FirestoreFile} from "~admin/types";
import {MatTabGroup} from "@angular/material/tabs";


@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: [
    "./admin.component.scss",
    "./../admin-theme.scss"
  ]
})
export class AdminComponent {

  public Routes = Object.values(MyRoutes);
  public RouteKeys = Object.keys(MyRoutes);

  public icons: SocialIcons[] = [
    SocialIcons.GITHUB,
    SocialIcons.LINKEDIN,
    SocialIcons.YOUTUBE,
    SocialIcons.MAIL,
    SocialIcons.FILE,
    SocialIcons.FILE_HEART
  ];

  public images: FirestoreFile[] = [];

  public formSetup: { [key: string]: boolean } = {} as unknown as any;

  public currentTab: MyRoutes;

  public readonly MyRoutes = MyRoutes;

  @ViewChild("matTabGroup", {static: true})
  public matTabGroup: MatTabGroup;

  constructor(
    @Inject("Window") public readonly window: Window,
    public readonly snackBar: MatSnackBar,
    public readonly service: AdminService,
    public readonly route: ActivatedRoute,
    public readonly fireApi: FirebaseApiService,
    public readonly ref: ChangeDetectorRef
  ) {

    this.images = this.route.snapshot.data?.files ?? this.route.parent.snapshot.data?.files;

  }

  public formArray(form: UntypedFormGroup, key: string): MainFormArray<any> {
    return (form.get(key) as MainFormArray<any>) as MainFormArray<any>;
  }

  public formControl(form: AbstractControl, key: string): UntypedFormControl {
    return form.get(key) as UntypedFormControl;
  }

  public addProjectControl(form: MainFormGroup<ProjectsPage>): void {
    this.addFormControl(
      this.formArray(form, "projects"),
      this.service.projectContent({}, this.formArray(form, "projects").length)
    );
  }

  public addFormControl(
    form: UntypedFormArray,
    control: AbstractControl = new UntypedFormControl(null, Validators.required)
  ) {
    form.push(control);
  }

  public addTitleControl(form: UntypedFormArray) {
    form.push(this.service.homeFormTitle({} as HomePage["title"][0], form.controls.length));
  }

  public addLinkControl(form: MainFormArray<LinksPageLink[]>) {
    form.push(this.service.linkForm({} as LinksPageLink, form.controls.length));
  }

  public save<T>(page: FirebasePageEnum, value: T) {
    this.fireApi.updatePage(page, value)
      .pipe(catchError((error: HttpErrorResponse) => {
        console.error(page, error);
        this.snackBar.open("ERROR! " + JSON.stringify(error.error), "dismiss");
        return throwError(error);
      }))
      .subscribe(() => {
        this.snackBar.open("Saved!", null, {duration: 300000});
      });
  }

  public getSection<T>(page: FirebasePageEnum): Observable<T> {
    return this.fireApi.fetchPageDocument(page)
      .pipe(
        tap(() => (this.formSetup[page] = true))
      );
  }

  public getProjectPage(page: FirebasePageEnum, article: ArticleGroup): Observable<ProjectsPage> {
    return this.getSection<ProjectsPage>(page)
      .pipe(
        tap(() => (this.formSetup[page] = true))
      );
  }
}
