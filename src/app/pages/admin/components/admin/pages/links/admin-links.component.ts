import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { MainFormArray } from "~app/shared/classes";
import { FirebasePageEnum } from "~app/shared/enums";

import { AdminComponent } from "../../admin.component";
import { MyRoutes } from "~routes/routes";
import { LinksPage } from "~app/pages/home-page/pages/links/interfaces";


@Component({
  selector: "app-admin-links",
  templateUrl: "./admin-links.component.html",
  styleUrls: [
    "./../../../admin-theme.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminLinksComponent extends AdminComponent implements OnInit {

  public ngOnInit(): void {
    this.setupLinksForm();

    console.log("IMAGES", this.images);
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

  public saveLinksForm() {
    const value: LinksPage = this.service.linksForm.value;
    value.links.sort((a, b) => a.index - b.index);
    this.save<LinksPage>(FirebasePageEnum.LINKS, value);
  }

}
