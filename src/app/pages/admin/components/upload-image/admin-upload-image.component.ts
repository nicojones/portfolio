import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Constants} from "~app/constants.enum";


@Component({
  selector: "app-admin-upload-image",
  templateUrl: "./admin-upload-image.component.html",
  styleUrls: [
    "./admin-upload-image.component.scss",
    "./../admin-uploader.scss",
    "./../admin-theme.scss"
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUploadImageComponent {

  public filesUploading: Record<string, { name: string; percentage: number }> = {};

  public get fileKeys(): string[] {
    return Object.keys(this.filesUploading);
  }

  constructor(
    private readonly firebaseStorage: AngularFireStorage,
    private readonly ref: ChangeDetectorRef
  ) {
  }

  public onFilesDropped(files: FileList): void {

    let prefix = prompt("Enter a prefix for this image batch");
    if (prefix && prefix.length) {
      prefix = prefix + "--";
    }

    for (let i = 0, len = Array.from(files).length; i < len; ++i) {
      this.filesUploading[files[i].name] = {name: files[i].name, percentage: 0};

      this.firebaseStorage.upload(
        Constants.STORAGE_BUCKET_FOLDER + "/" + prefix + files[i].name,
        files[i]
      )
        .percentageChanges()
        .subscribe((percentage) => {
          this.filesUploading[files[i].name].percentage = Math.round(percentage);
          this.ref.markForCheck();
        });
    }
  }
}
