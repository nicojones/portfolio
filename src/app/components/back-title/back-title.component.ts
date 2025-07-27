import {Component, Input, OnInit, TemplateRef, ViewChild} from "@angular/core";
import { getLocalStorage } from "~app/services";
import { StorageKey } from "~app/shared/enums";
import { ClientOs } from "~app/shared/interfaces";


@Component({
  selector: "app-back-title",
  templateUrl: "./back-title.component.html",
  styleUrls: ["./back-title.component.scss"]
})
export class BackTitleComponent implements OnInit {

  @Input()
  public url: string;

  @Input()
  public link: TemplateRef<any> | null = null;

  @Input()
  public subtitle: string | null = null;

  @Input()
  public huge = true;

  @ViewChild("title", {static: true})
  public titleRef: TemplateRef<any>;

  /**
   * Info about the client's OS and browser.
   */
  public clientOs: ClientOs = getLocalStorage().getItem<ClientOs>(StorageKey.CLIENT_OS);


  public ngOnInit() {
    // const el = this.titleRef.elementRef.nativeElement;
    // const observer = new IntersectionObserver(
    //   ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    //   {threshold: [1]}
    // );
    //
    // observer.observe(el);
  }

}
