import {
  animate,
  AnimationTriggerMetadata,
  group,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Timings } from '~app/shared/animations/timings.animation';


export function slideUnder (selector: string = '.slide-under'): AnimationTriggerMetadata {
  return trigger('slideUnder', [
    transition(':enter', [
      query(selector, [
        style({ transform: `translateY(-100%)`, opacity: '0.8' }),
        stagger(Timings.SlideStaggerTime, [
          group([
            animate(`${ Timings.SlideDuration } ease-out`, style({ transform: 'translateY(0)' })),
            animate(`${ Timings.SlideDuration } 100ms ease-out`, style({ opacity: '1' }))
          ])
        ])
      ])
    ])
  ]);
}
