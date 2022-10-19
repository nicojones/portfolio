import {Component, Inject, ViewChild} from "@angular/core";
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
import {AboutPage} from "~home-page/pages/about/interfaces/about-page";
import {ContactMePage} from "~home-page/pages/contact-me/shared/interfaces";
import {FirebaseApiService} from "~app/services/firebase-api.service";
import {LinksPage, LinksPageLink} from "~home-page/pages/links/interfaces";
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
    SocialIcons.PDF,
    SocialIcons.USER
  ];

  public images: FirestoreFile[] = this.route.snapshot.data.files;

  public formSetup: { [key: string]: boolean } = {} as unknown as any;

  public currentTab: MyRoutes;

  public readonly MyRoutes = MyRoutes;

  @ViewChild("matTabGroup", {static: true})
  public matTabGroup: MatTabGroup;

  constructor(
    @Inject("Window") private readonly window: Window,
    private readonly snackBar: MatSnackBar,
    public readonly service: AdminService,
    private readonly route: ActivatedRoute,
    private readonly fireApi: FirebaseApiService
  ) {

  }

  public changedTab(key: MyRoutes) {
    this.window.location.hash = key;

    switch (key) {
      case MyRoutes.HOME:
        return this.setupHomeForm();
      case MyRoutes.LINKS:
        return this.setupLinksForm();
      case MyRoutes.ABOUT:
        return this.setupAboutForm();
      case MyRoutes.WORK:
        return this.setupWorkForm();
      case MyRoutes.ART:
        return this.setupArtForm();
      case MyRoutes.CONTACT:
        return this.setupContactForm();
      case MyRoutes.BLOG:
        return this.setupBlogForm();
      case MyRoutes.UPLOAD_IMAGE:
        this.currentTab = MyRoutes.UPLOAD_IMAGE;
    }
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

  public setupHomeForm() {
    return this.getSection<HomePage>(FirebasePageEnum.HOME).subscribe((home: HomePage) => {
      this.service.homeForm.reset();
      this.service.homeForm.patchValue(home);
      for (let i = 0, len = home.title.length; i < len; ++i) {
        (this.service.homeForm.get("title") as MainFormArray<HomePage["title"]>).push(
          this.service.homeFormTitle(home.title[i], i)
        );
      }
      this.currentTab = MyRoutes.HOME;
    });
  }

  public setupLinksForm() {
    return this.getSection<LinksPage>(FirebasePageEnum.LINKS).subscribe((links: LinksPage) => {
      this.service.linksForm.reset();
      this.service.linksForm.patchValue(links);
      for (let i = 0, len = links.links.length; i < len; ++i) {
        (this.service.linksForm.get("links") as MainFormArray<LinksPage["links"]>).push(
          this.service.linkForm(links.links[i], i)
        );
      }
      this.currentTab = MyRoutes.LINKS;
    });
  }

  public setupAboutForm() {
    return this.getSection<AboutPage>(FirebasePageEnum.ABOUT).subscribe((about: AboutPage) => {
      this.service.aboutForm.reset();
      this.service.aboutForm.patchValue(about);

      for (let i = 0, len = about.title.first.length; i < len; ++i) {
        (this.service.aboutForm.get(["title", "first"]) as UntypedFormArray).push(
          new UntypedFormControl(about.title.first[i], Validators.required)
        );
      }
      for (let i = 0, len = about.title.multi.length; i < len; ++i) {
        (this.service.aboutForm.get(["title", "multi"]) as UntypedFormArray).push(
          new UntypedFormControl(about.title.multi[i], Validators.required)
        );
      }
      for (let i = 0, len = about.title.last.length; i < len; ++i) {
        (this.service.aboutForm.get(["title", "last"]) as UntypedFormArray).push(
          new UntypedFormControl(about.title.last[i], Validators.required)
        );
      }
      for (let i = 0, len = about.text.length; i < len; ++i) {
        (this.service.aboutForm.get("text") as MainFormArray<AboutPage["text"]>).push(
          this.service.textContent(about.text[i])
        );
      }
      this.currentTab = MyRoutes.ABOUT;
    });
  }

  public setupContactForm() {
    return this.getSection<ContactMePage>(FirebasePageEnum.CONTACT).subscribe((contact: ContactMePage) => {
      this.service.contactForm.reset();
      this.service.contactForm.patchValue(contact);

      for (let i = 0, len = contact.text.length; i < len; ++i) {
        (this.service.contactForm.get("text") as MainFormArray<ContactMePage["text"]>).push(
          this.service.textContent(contact.text[i])
        );
      }
      for (let i = 0, len = contact.link.length; i < len; ++i) {
        (this.service.contactForm.get("link") as MainFormArray<ContactMePage["link"]>).push(
          this.service.linkContent(contact.link[i])
        );
      }

      this.currentTab = MyRoutes.CONTACT;
    });
  }

  public setupWorkForm() {
    return this.getProjectPage(FirebasePageEnum.WORK, ArticleGroup.WORK)
      .subscribe((work: ProjectsPage) => {
        this.service.workForm.reset();
        this.service.workForm.patchValue(work);

        for (let i = 0, len = (work.projects || []).length; i < len; ++i) {
          (this.service.workForm.get("projects") as MainFormArray<ProjectsPage["projects"]>).push(
            this.service.projectContent(work.projects[i], i)
          );
        }
        this.currentTab = MyRoutes.WORK;
      });
  }

  public setupArtForm() {
    return this.getProjectPage(FirebasePageEnum.ART, ArticleGroup.ART)
      .subscribe((art: ProjectsPage) => {
        this.service.artForm.reset();
        this.service.artForm.patchValue(art);

        for (let i = 0, len = (art.projects || []).length; i < len; ++i) {
          (this.service.artForm.get("projects") as MainFormArray<ProjectsPage["projects"]>).push(
            this.service.projectContent(art.projects[i], i)
          );
        }
        this.currentTab = MyRoutes.ART;
      });
  }

  public setupBlogForm() {
    return this.getProjectPage(FirebasePageEnum.BLOG, ArticleGroup.BLOG)
      .subscribe((blog: ProjectsPage) => {
        this.service.blogForm.reset();
        this.service.blogForm.patchValue(blog);

        for (let i = 0, len = (blog.projects || []).length; i < len; ++i) {
          (this.service.blogForm.get("projects") as MainFormArray<ProjectsPage["projects"]>).push(
            this.service.projectContent(blog.projects[i], i)
          );
        }
        this.currentTab = MyRoutes.BLOG;
      });
  }

  public saveHomeForm() {
    const value: HomePage = this.service.homeForm.value;
    value.title.sort((a, b) => a.index - b.index);
    this.save<HomePage>(FirebasePageEnum.HOME, value);
  }

  public saveLinksForm() {
    const value: LinksPage = this.service.linksForm.value;
    value.links.sort((a, b) => a.index - b.index);
    this.save<LinksPage>(FirebasePageEnum.LINKS, value);
  }

  public saveAboutForm() {
    const value: AboutPage = this.service.aboutForm.value;
    this.save<AboutPage>(FirebasePageEnum.ABOUT, value);
  }

  public saveContactForm() {
    const value: ContactMePage = this.service.contactForm.value;
    this.save<ContactMePage>(FirebasePageEnum.CONTACT, value);
  }

  public saveWorkForm() {
    const value: ProjectsPage = this.service.workForm.value;
    value.projects.sort((a, b) => a.index - b.index);
    this.save<ProjectsPage>(FirebasePageEnum.WORK, value);
  }

  public saveArtForm() {
    const value: ProjectsPage = this.service.artForm.value;
    value.projects.sort((a, b) => a.index - b.index);
    this.save<ProjectsPage>(FirebasePageEnum.ART, value);
  }

  public saveBlogForm() {
    const value: ProjectsPage = this.service.blogForm.value;
    value.projects.sort((a, b) => a.index - b.index);
    this.save<ProjectsPage>(FirebasePageEnum.BLOG, value);
  }

  public addTitleControl(form: UntypedFormArray) {
    form.push(this.service.homeFormTitle({} as HomePage["title"][0], form.controls.length));
  }

  public addLinkControl(form: MainFormArray<LinksPageLink[]>) {
    form.push(this.service.linkForm({} as LinksPageLink, form.controls.length));
  }

  private save<T>(page: FirebasePageEnum, value: T) {
    this.fireApi.updatePage(page, value)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.snackBar.open("ERROR! " + JSON.stringify(error.error), "dismiss");
        return throwError(error);
      }))
      .subscribe(() => {
        this.snackBar.open("Saved!", null, {duration: 3000});
      });
  }

  private getSection<T>(page: FirebasePageEnum): Observable<T> {
    return this.fireApi.fetchPageDocument(page)
      .pipe(
        tap(() => (this.formSetup[page] = true))
      );
  }

  private getProjectPage(page: FirebasePageEnum, article: ArticleGroup): Observable<ProjectsPage> {
    return this.getSection<ProjectsPage>(page)
      .pipe(
        tap(() => (this.formSetup[page] = true))
      );
  }
}
