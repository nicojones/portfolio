import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable()
export class StarsService {
  public static reverse$ = new BehaviorSubject<boolean>(false);
}
