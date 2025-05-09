import {FirebasePageEnum} from "~app/shared/enums";
import {MyRoutes} from "~routes/routes";

export interface FirebasePage {
  name: FirebasePageEnum;
  url: keyof MyRoutes;
  data: string; /* JSON encoded string */
}
