import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {ContactMePage} from "~home-page/pages/contact-me/shared/interfaces";
import {FirebasePageEnum} from "~app/shared/enums";
import {FirebaseApiService} from "~app/services/firebase-api.service";


@Injectable()
export class ContactMeResolver implements Resolve<ContactMePage> {

  constructor(
    private readonly firebaseApi: FirebaseApiService
  ) {
  }

  public resolve(): Observable<ContactMePage> {
    return this.firebaseApi.fetchPageDocument(FirebasePageEnum.CONTACT);
  }
}
