import {ActivatedRoute} from "@angular/router";
import {ChangeDetectionStrategy, Component, ElementRef, Inject, QueryList, ViewChildren} from "@angular/core";
import {fadeIn} from "~app/shared/animations";
import {LinksPage, LinksPageLink} from "~home-page/pages/links/interfaces";
import PocketBase from "pocketbase";

@Component({
  selector: "app-links-page",
  templateUrl: "./links-page.component.html",
  styleUrls: ["./links-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn(50, "300ms 600ms")]
})
export class LinksPageComponent {

  /**
   * Data for the home page
   */
  public linksPage: LinksPage = this.route.snapshot.data.linksPage;

  @ViewChildren("card")
  public cardElementRef: QueryList<ElementRef<HTMLDivElement>>;

  constructor(
    private route: ActivatedRoute,
    @Inject("Window") private readonly window: Window
  ) {


    // this.dohtat();
  }

  public async dohtat() {
    const client = new PocketBase("http://kupfer.es:8090");

    // ...

    // fetch a paginated records list
    const resultList = await client.records.getList("links", 1, 50, {
      filter: 'created >= "2022-01-01 00:00:00"',
      expand: "url,url.text"
    });

    // alternatively you can also fetch all records at once via getFullList:
    const records = await client.records.getFullList("links", 200 /* batch size */, {
      sort: "-created"
    });

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

  public onExternalClick(link: LinksPageLink): void {
    if (!link.external) {
      return;
    }
    this.window.open(link.url);
  }

}
