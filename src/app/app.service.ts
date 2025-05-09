import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable()
export class AppService {
  /**
   * Changing this value will _permanently_ show the the menu <--> the intro
   */
  public static showMenu$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  /**
   * Not every time we load projects we want animations. When we go "back" we don't.
   */
  public static projectSlideIn = true;
}
