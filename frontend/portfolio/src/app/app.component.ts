import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Routes } from '~routes/routes';

import { slide } from '~app/shared/animations';
import { AppTitleService } from '~app/services';
import { detectAndSaveOS } from '~app/functions';
import { AuthGuard } from '~app/services/guards/auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide()]
})
export class AppComponent {
  public readonly Routes = Routes;

  public isAuthed$ = AuthGuard.loggedIn$;

  // noinspection JSUnusedLocalSymbols
  constructor (
    private title: AppTitleService
  ) {
    detectAndSaveOS();
    AppTitleService.title.setTitle('Nicolas Kupfer');
  }
}
