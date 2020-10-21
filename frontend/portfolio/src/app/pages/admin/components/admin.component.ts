import { Component, ViewEncapsulation } from '@angular/core';
import { MyWorkPage } from '~home-page/pages/my-work/shared/interfaces';
import { AboutPage } from '~home-page/pages/about/interfaces/about-page';
import { HomePage } from '~home-page/interfaces';
import { ContactMePage } from '~home-page/pages/contact-me/shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '~env/environment';
import { Section } from '~app/shared/enums';
import { AdminService } from '~admin/services';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainFormArray } from '~app/shared/classes';
import { RouteUrls } from '~routes/routes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


const enum TabEnum {
  Welcome,
  Home,
  About,
  Contact,
  Work
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./admin.component.scss', './admin-theme.scss']
})
export class AdminComponent {

  public Routes = Object.values(RouteUrls);
  public RouteKeys = Object.keys(RouteUrls);

  public formSetup: { [key in keyof TabEnum]: boolean } = {} as unknown as any;

  constructor (
    private http: HttpClient,
    private snackBar: MatSnackBar,
    public service: AdminService
  ) { }

  public changedTab (index: number) {
    switch (index) {
      case TabEnum.Home:
        return this.setupHomeForm();
      case TabEnum.About:
        return this.setupAboutForm();
      case TabEnum.Work:
        return this.setupWorkForm();
      case TabEnum.Contact:
        return this.setupContactForm();
    }
  }

  public formArray (form: FormGroup, key: string): MainFormArray<any> {
    return (form.get(key) as MainFormArray<any>) as MainFormArray<any>;
  }

  public formControl (form: AbstractControl, key: string): FormControl {
    return form.get(key) as FormControl;
  }

  public addFormControl (form: FormArray) {
    form.push(new FormControl(null, Validators.required));
  }

  public setupHomeForm () {
    return this.getSection<HomePage>(Section.Home).subscribe((home: HomePage) => {
      this.service.homeForm.patchValue(home);
      for (let i = 0, len = home.title.length; i < len; ++i) {
        (this.service.homeForm.get('title') as MainFormArray<HomePage['title']>).push(
          this.service.homeFormTitle(home.title[i]));
      }
    });
  }

  public setupAboutForm () {
    return this.getSection<AboutPage>(Section.About).subscribe((about: AboutPage) => {
      this.service.aboutForm.patchValue(about);

      for (let i = 0, len = about.title.multi.length; i < len; ++i) {
        (this.service.aboutForm.get(['title', 'multi']) as FormArray).push(
          new FormControl(about.title.multi[i], Validators.required));
      }
      for (let i = 0, len = about.text.length; i < len; ++i) {
        (this.service.aboutForm.get('text') as MainFormArray<AboutPage['text']>).push(
          this.service.textContent(about.text[i]));
      }
    });
  }

  public setupContactForm () {
    return this.getSection<ContactMePage>(Section.Contact).subscribe((contact: ContactMePage) => {
      this.service.contactForm.patchValue(contact);

      for (let i = 0, len = contact.text.length; i < len; ++i) {
        (this.service.contactForm.get('text') as MainFormArray<ContactMePage['text']>).push(
          this.service.textContent(contact.text[i]));
      }
      for (let i = 0, len = contact.link.length; i < len; ++i) {
        (this.service.contactForm.get('link') as MainFormArray<ContactMePage['link']>).push(
          this.service.linkContent(contact.link[i]));
      }
    });
  }

  public setupWorkForm () {
    return this.getSection<MyWorkPage>(Section.Work).subscribe((work: MyWorkPage) => {
      this.service.workForm.patchValue(work);

      for (let i = 0, len = work.text.length; i < len; ++i) {
        (this.service.workForm.get('text') as MainFormArray<MyWorkPage['text']>).push(
          this.service.textContent(work.text[i]));
      }
    });
  }

  public saveHomeForm () {
    const value: HomePage = this.service.homeForm.value;
    this.save<HomePage>(Section.Home, value);
  }

  public saveAboutForm () {
    const value: AboutPage = this.service.aboutForm.value;
    this.save<AboutPage>(Section.About, value);
  }

  public saveContactForm () {
    const value: ContactMePage = this.service.contactForm.value;
    this.save<ContactMePage>(Section.Contact, value);
  }

  public saveWorkForm () {
    const value: MyWorkPage = this.service.workForm.value;
    this.save<MyWorkPage>(Section.Work, value);
  }

  public addTitleControl (form: FormArray) {
    form.push(this.service.homeFormTitle({} as HomePage['title'][0]));
  }

  private save<T> (section: Section, value: T) {
    const body = new FormData();
    body.append('section', section);
    body.append('content', JSON.stringify(value));

    this.http.post<any>(`${ environment.url }/sections`, body)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.snackBar.open('ERROR! ' + error.error, 'dismiss');
        return throwError(error);
      }))
      .subscribe((a: any) => {
        this.snackBar.open(a.message, null, { duration: 3000 });
      });
  }

  private getSection<T> (section: Section): Observable<T> {
    if (this.formSetup[section]) {
      return throwError(`form ${ section } already loaded - skipping`);
    }
    return this.http
      .get<T>(`${ environment.url }/section/${ section }`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.snackBar.open('ERROR! ' + error.error, 'dismiss');
          return throwError(error);
        }),
        tap(() => (this.formSetup[section] = true))
      );
  }
}
