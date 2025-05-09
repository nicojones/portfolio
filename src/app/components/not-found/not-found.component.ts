import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from "@angular/core";
import {StarsService} from "~app/components/stars/shared/services/stars.service";
import {MyRoutes} from "~routes/routes";


@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NotFoundComponent implements OnDestroy {

  public readonly Routes = MyRoutes;

  public showBlackHole = false;

  constructor (
    private ref: ChangeDetectorRef
  ) {
    StarsService.reverse$.next(true);

    setTimeout(() => {
      this.showBlackHole = true;
      this.ref.markForCheck();
    }, 100);
  }

  public ngOnDestroy() {
    StarsService.reverse$.next(false);
  }
}
