import {Component, Input} from "@angular/core";


@Component({
  selector: "app-back-title",
  templateUrl: "./back-title.component.html",
  styleUrls: ["./back-title.component.scss"]
})
export class BackTitleComponent {

  @Input()
  public url: string;

}
