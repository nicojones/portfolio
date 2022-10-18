import {NgModule} from "@angular/core";
import {SharedModule} from "~app/shared";
import {AdminService} from "~admin/services";
import {AdminRouting} from "~admin/admin.routing";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {RichTextModule} from "~app/modules/rich-text";
import {AdminComponent} from "~admin/components/admin/admin.component";
import {AdminUploadImageComponent} from "~admin/components/upload-image/admin-upload-image.component";
import {DraggerDirective} from "~app/shared/directives";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {FilesResolver} from "~admin/resolvers";


@NgModule({
  declarations: [
    AdminComponent,
    AdminUploadImageComponent,
    DraggerDirective
  ],
  imports: [
    SharedModule,
    AdminRouting,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    RichTextModule,

    AngularFireStorageModule
  ],
  providers: [
    AdminService,
    FilesResolver
  ]
})
export class AdminModule { }
