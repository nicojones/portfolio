import {ArticleGroup, FirebasePageEnum} from "~app/shared/enums";
import {MyRoutes} from "~routes/routes";

export interface ProjectRoutingData {
  article: ArticleGroup;
  path: MyRoutes;
  page: FirebasePageEnum;
}
