import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {map, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ListResult, Reference} from "@angular/fire/compat/storage/interfaces";
import {environment} from "~env/environment";
import {Constants} from "~app/constants.enum";
import {FirestoreFile} from "~admin/types";


@Injectable()
export class FilesResolver implements Resolve<unknown> {

  constructor(
    private firebase: AngularFireStorage
  ) {
  }

  public resolve(): Observable<FirestoreFile[]> {
    return this.firebase
      .ref(Constants.STORAGE_BUCKET_FOLDER + "/")
      .list()
      .pipe(
        map((list: ListResult) => list.items),
        map((items: Reference[]) => items.map<FirestoreFile>(
          (i: Reference) => ({name: i.name, url: environment.fileStorage(i.bucket, i.name)})
        ))
      );
  }
}
