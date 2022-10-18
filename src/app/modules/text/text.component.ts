import {Component, Input} from "@angular/core";
import {LinkContent, ProjectContent, TextContent} from "~app/shared/interfaces";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";


@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"]
})
export class TextComponent {

  @Input()
  public text: (TextContent)[];

  @Input()
  public links: LinkContent[];

  @Input()
  public projects: ProjectContent[];

  constructor (
    private sanitizer: DomSanitizer
  ) { }

  public sanitize(text: any, key: string = "content"): SafeHtml {
    return (text._sanitized = this.sanitizer.bypassSecurityTrustHtml(text[key]));
  }

  public onLinkClick (event: any, link: LinkContent) {
    if (!link.url) {
      event.preventDefault();
    }
  }
}
