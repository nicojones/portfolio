import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { MainFormArray } from "~app/shared/classes";
import { FirebasePageEnum } from "~app/shared/enums";

import { AdminComponent } from "../../admin.component";
import { ContactMePage } from "~app/pages/home-page/pages/contact-me/shared/interfaces";
import { MyRoutes } from "~routes/routes";


@Component({
  selector: "app-admin-contact",
  templateUrl: "./admin-contact.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminContactComponent extends AdminComponent implements OnInit {

  public ngOnInit(): void {
    this.setupContactForm();
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







  public saveContactForm() {
    const value: ContactMePage = this.service.contactForm.value;
    this.save<ContactMePage>(FirebasePageEnum.CONTACT, value);
  }


}
