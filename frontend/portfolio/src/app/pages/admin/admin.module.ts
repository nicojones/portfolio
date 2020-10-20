import { NgModule } from '@angular/core';
import { AdminComponent } from '~admin/components';
import { SharedModule } from '~app/shared';
import { AdminService } from '~admin/services';
import { AdminRouting } from '~admin/admin.routing';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule,
    AdminRouting
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
