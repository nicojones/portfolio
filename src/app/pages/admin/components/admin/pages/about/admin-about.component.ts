import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UntypedFormArray, UntypedFormControl, Validators } from "@angular/forms";

import { MainFormArray } from "~app/shared/classes";
import { FirebasePageEnum } from "~app/shared/enums";

import { AboutPage } from "~home-page/pages/about/interfaces/about-page";
import { AdminComponent } from "../../admin.component";


@Component({
  selector: "app-admin-about",
  templateUrl: "./admin-about.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminAboutComponent extends AdminComponent implements OnInit {

  public ngOnInit(): void {
    this.setupAboutForm();
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
      this.ref.detectChanges();
    });
  }

  public saveAboutForm() {
    const value: AboutPage = this.service.aboutForm.value;
    this.save<AboutPage>(FirebasePageEnum.ABOUT, value);
  }

}
