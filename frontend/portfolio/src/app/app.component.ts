import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slide } from '~app/shared/animations';
import { detectAndSaveOS } from '~app/functions';
import { Routes } from '~routes/routes';
import { AppTitleService } from '~app/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide()]
})
export class AppComponent {
  public readonly Routes = Routes;

  // noinspection JSUnusedLocalSymbols
  constructor (
    private title: AppTitleService
  ) {
    detectAndSaveOS();
    AppTitleService.title.setTitle('Nicolas Kupfer');
  }
}
