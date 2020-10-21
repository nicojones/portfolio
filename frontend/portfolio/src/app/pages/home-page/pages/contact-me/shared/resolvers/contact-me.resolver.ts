import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContactMePage } from '~home-page/pages/contact-me/shared/interfaces';
import { environment } from '~env/environment';
import { tap } from 'rxjs/operators';
import { Section } from '~app/shared/enums';


@Injectable()
export class ContactMeResolver implements Resolve<ContactMePage> {

  private static contactMePage: ContactMePage;

  constructor (
    private http: HttpClient
  ) {
  }

  public resolve (): Observable<ContactMePage> {
    if (ContactMeResolver.contactMePage) {
      return of(ContactMeResolver.contactMePage);
    }

    return this.http
      .get<ContactMePage>(`${ environment.url }/section/${ Section.Contact }`)
      .pipe(
        tap((contactMePage: ContactMePage) => (ContactMeResolver.contactMePage = contactMePage))
      );
  }
}
