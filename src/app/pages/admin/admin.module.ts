import { NgModule } from '@angular/core';
import { AdminComponent } from '~admin/components';
import { SharedModule } from '~app/shared';
import { AdminService } from '~admin/services';
import { AdminRouting } from '~admin/admin.routing';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RichTextModule } from '~app/modules/rich-text';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule,
    AdminRouting,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    RichTextModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
