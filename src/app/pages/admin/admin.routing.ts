import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '~admin/components';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent
      }
    ])
  ]
})
export class AdminRouting {}
