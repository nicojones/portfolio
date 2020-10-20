import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StarObject } from '~app/components/stars/interfaces';


@Injectable()
export class StarsService {
  /**
   * Extra objects to show in the {@see StarsComponent}
   */
  public static objects$ = new BehaviorSubject<StarObject>({ astronaut: false });

  public static set showObject (objects: Partial<StarObject>) {
    StarsService.objects$.next({ ...this.objects$.getValue(), ...objects });
  }
}
