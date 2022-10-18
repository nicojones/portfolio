import {ActivatedRoute} from "@angular/router";
import {ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {fadeIn} from "~app/shared/animations";
import {LinksPage} from "~home-page/pages/links/interfaces";


@Component({
  selector: "app-links-page",
  templateUrl: "./links-page.component.html",
  styleUrls: ["./links-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn(300, "400ms", 0)]
})
export class LinksPageComponent {

  /**
   * Data for the home page
   */
  public linksPage: LinksPage = this.route.snapshot.data.linksPage;

  @ViewChildren("card")
  public cardElementRef: QueryList<ElementRef<HTMLDivElement>>;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  public onMouseMove($event) {
    this.cardElementRef.forEach((card: ElementRef<HTMLDivElement>) => {
      const rect = card.nativeElement.getBoundingClientRect(),
        x = $event.clientX - rect.left,
        y = $event.clientY - rect.top;

      card.nativeElement.style.setProperty("--mouse-x", `${x}px`);
      card.nativeElement.style.setProperty("--mouse-y", `${y}px`);
    });
  }

}
