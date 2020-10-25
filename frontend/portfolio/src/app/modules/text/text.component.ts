import { Component, Input, OnInit } from '@angular/core';
import { LinkContent, ProjectContent, TextContent } from '~app/shared/interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input()
  public text: (TextContent)[];

  @Input()
  public links: LinkContent[];

  @Input()
  public projects: ProjectContent[];

  constructor (
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit (): void {
  }

  public sanitize (text: TextContent): SafeHtml {
    return (text.sanitized = this.sanitizer.bypassSecurityTrustHtml(text.content));
  }
}
