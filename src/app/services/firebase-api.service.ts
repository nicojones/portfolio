import {Injectable} from "@angular/core";
import {FirebasePageEnum} from "~app/shared/enums";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({providedIn: "root"})
export class FirebaseApiService {

  constructor(
    private readonly db: AngularFireDatabase
  ) {
  }

  public fetchPageDocument<T = any>(page: FirebasePageEnum): Observable<T> {
    return this.db.object<T>("/pages/" + page).valueChanges();
  }
}
