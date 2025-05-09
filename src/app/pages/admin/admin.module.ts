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
import { AdminAboutComponent } from "./components/admin/pages/about/admin-about.component";
import { AdminHelpersProjectComponent } from "./components/admin/helpers/project/admin-helpers-project.component";
import { AdminProjectsComponent } from "./components/admin/pages/projects/admin-projects.component";
import { AdminHelpersTextComponent } from "./components/admin/helpers/text/admin-helpers-text.component";
import { AdminHomeComponent } from "./components/admin/pages/home/admin-home.component";
import { AdminLinksComponent } from "./components/admin/pages/links/admin-links.component";
import { AdminArtComponent } from "./components/admin/pages/art/admin-art.component";
import { AdminBlogComponent } from "./components/admin/pages/blog/admin-blog.component";
import { AdminContactComponent } from "./components/admin/pages/contact/admin-contact.component";
import { AdminHelpersLinksComponent } from "./components/admin/helpers/links/admin-helpers-links.component";
import { RouterModule } from "@angular/router";
import { AdminOnComponent } from "./components/admin/pages/on/admin-on.component";


@NgModule({
  declarations: [
    AdminComponent,
    // Admin Sub-pages
    AdminAboutComponent,
    AdminProjectsComponent,
    AdminHomeComponent,
    AdminContactComponent,
    AdminLinksComponent,
    AdminArtComponent,
    AdminOnComponent,
    AdminBlogComponent,
    // Upload page
    AdminUploadImageComponent,
    // Helpers
    AdminHelpersProjectComponent,
    AdminHelpersTextComponent,
    AdminHelpersLinksComponent,
    // Other stuff
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
    RouterModule,

    AngularFireStorageModule
  ],
  providers: [
    AdminService,
    FilesResolver
  ]
})
export class AdminModule { }
