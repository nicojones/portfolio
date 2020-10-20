import { Component, OnDestroy, OnInit } from '@angular/core';
import { StarsService } from '~app/components/stars/shared/services/stars.service';
import { Routes } from '~routes/routes';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  public readonly Routes = Routes;

  constructor () {
    StarsService.reverse$.next(true);
  }

  ngOnInit (): void {
  }

  ngOnDestroy () {
    StarsService.reverse$.next(false);
  }

}
