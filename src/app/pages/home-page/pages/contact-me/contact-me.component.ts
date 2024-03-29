import {ActivatedRoute} from "@angular/router";
import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

import {MyRoutes} from "~routes/routes";

import {slideIn} from "~app/shared/animations";

import {ContactMePage} from "~home-page/pages/contact-me/shared/interfaces";


@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class ContactMeComponent implements OnInit {

  public readonly Routes = MyRoutes;

  public readonly contactMe: ContactMePage;

  constructor(
    private route: ActivatedRoute
  ) {
    this.contactMe = this.route.snapshot.data.contactMe;
  }

  public ngOnInit(): void {
  }

}
