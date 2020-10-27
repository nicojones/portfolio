import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { RouteUrls } from '~routes/routes';
import { environment } from '~env/environment';

import { AdminService } from '~admin/services';
import { MainFormArray } from '~app/shared/classes';
import { Section, SocialIcons } from '~app/shared/enums';
import { AuthGuard } from '~app/services/guards/auth.guard';

import { HomePage } from '~home-page/interfaces';
import { MyWorkPage } from '~home-page/pages/my-work/shared/interfaces';
import { AboutPage } from '~home-page/pages/about/interfaces/about-page';
import { ContactMePage } from '~home-page/pages/contact-me/shared/interfaces';


const Tabs = {
  Welcome: 0,
  Home: 1,
  About: 2,
  Contact: 3,
  Work: 4
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
    './admin.component.scss',
    './admin-theme.scss'
  ]
})
export class AdminComponent {

  public Routes = Object.values(RouteUrls);
  public RouteKeys = Object.keys(RouteUrls);

  public icons: SocialIcons[] = [SocialIcons.Github, SocialIcons.Linkedin, SocialIcons.Youtube, SocialIcons.Mail, SocialIcons.PDF, SocialIcons.User];

  public formSetup: { [key: string]: boolean } = {} as unknown as any;

  public currentIndex: number;

  public tabs = Tabs;

  constructor (
    private http: HttpClient,
    private snackBar: MatSnackBar,
    public service: AdminService
  ) {}

  public changedTab (index: number) {
    switch (index) {
      case Tabs.Home:
        window.location.hash = 'Home';
        return this.setupHomeForm();
      case Tabs.About:
        window.location.hash = 'About';
        return this.setupAboutForm();
      case Tabs.Work:
        window.location.hash = 'Work';
        return this.setupWorkForm();
      case Tabs.Contact:
        window.location.hash = 'Contact';
        return this.setupContactForm();
    }
  }

  public formArray (form: FormGroup, key: string): MainFormArray<any> {
    return (form.get(key) as MainFormArray<any>) as MainFormArray<any>;
  }

  public formControl (form: AbstractControl, key: string): FormControl {
    return form.get(key) as FormControl;
  }

  public addFormControl (
    form: FormArray,
    control: AbstractControl = new FormControl(null, Validators.required)
  ) {
    form.push(control);
  }

  public setupHomeForm () {
    return this.getSection<HomePage>(Section.Home).subscribe((home: HomePage) => {
      this.service.homeForm.reset();
      this.service.homeForm.patchValue(home);
      for (let i = 0, len = home.title.length; i < len; ++i) {
        (this.service.homeForm.get('title') as MainFormArray<HomePage['title']>).push(
          this.service.homeFormTitle(home.title[i]));
      }
      this.currentIndex = Tabs.Home;
    });
  }

  public setupAboutForm () {
    return this.getSection<AboutPage>(Section.About).subscribe((about: AboutPage) => {
      this.service.aboutForm.reset();
      this.service.aboutForm.patchValue(about);

      for (let i = 0, len = about.title.multi.length; i < len; ++i) {
        (this.service.aboutForm.get(['title', 'multi']) as FormArray).push(
          new FormControl(about.title.multi[i], Validators.required));
      }
      for (let i = 0, len = about.text.length; i < len; ++i) {
        (this.service.aboutForm.get('text') as MainFormArray<AboutPage['text']>).push(
          this.service.textContent(about.text[i]));
      }
      this.currentIndex = Tabs.About;
    });
  }

  public setupContactForm () {
    return this.getSection<ContactMePage>(Section.Contact).subscribe((contact: ContactMePage) => {
      this.service.contactForm.reset();
      this.service.contactForm.patchValue(contact);

      for (let i = 0, len = contact.text.length; i < len; ++i) {
        (this.service.contactForm.get('text') as MainFormArray<ContactMePage['text']>).push(
          this.service.textContent(contact.text[i]));
      }
      for (let i = 0, len = contact.link.length; i < len; ++i) {
        (this.service.contactForm.get('link') as MainFormArray<ContactMePage['link']>).push(
          this.service.linkContent(contact.link[i]));
      }

      this.currentIndex = Tabs.Contact;
    });
  }

  public setupWorkForm () {
    return this.getSection<MyWorkPage>(Section.Work).subscribe((work: MyWorkPage) => {
      this.service.workForm.reset();
      this.service.workForm.patchValue(work);

      for (let i = 0, len = (work.projects || []).length; i < len; ++i) {
        (this.service.workForm.get('projects') as MainFormArray<MyWorkPage['projects']>).push(
          this.service.projectContent(work.projects[i]));
      }
      this.currentIndex = Tabs.Work;
    });
  }

  public saveHomeForm () {
    const value: HomePage = this.service.homeForm.value;
    value.title.sort((a, b) => a.index - b.index)
    console.log(value);
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
    const valueString = JSON.stringify(value);
    if (valueString.match(/"isTrusted"/)) {
      this.snackBar.open('Please change back to rich HTML!');
      return;
    }
    const body = new FormData();
    body.append('section', section);
    body.append('content', valueString);

    this.http.post<any>(
      `${ environment.phpUrl }?save`,
      body,
      { headers: { Authorization: AuthGuard.auth$.value } }
    )
      .pipe(catchError((error: HttpErrorResponse) => {
        this.snackBar.open('ERROR! ' + JSON.stringify(error.error), 'dismiss');
        return throwError(error);
      }))
      .subscribe((a: any) => {
        this.snackBar.open(a.message, null, { duration: 3000 });
      });
  }

  private getSection<T> (section: Section): Observable<T> {
    return this.http
      .get<T>(
        `${ environment.phpUrl }?section=${ section }`, { headers: { Authorization: AuthGuard.auth$.value } })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.snackBar.open('ERROR! ' + error.error, 'dismiss');
          return throwError(error);
        }),
        tap(() => (this.formSetup[section] = true))
      );
  }
}
