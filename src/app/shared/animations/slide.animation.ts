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


export function slideIn (selector: string = '.slide-in'): AnimationTriggerMetadata {
  return trigger('slideIn', [
    transition(':enter', [
      query(selector, [
        style({ transform: `translateX(${ Timings.SlideTranslate })`, opacity: '0' }),
        stagger(Timings.SlideStaggerTime, [
          group([
            animate(`${ Timings.SlideDuration } ease-out`, style({ transform: 'translateX(0)' })),
            animate(`${ Timings.SlideDuration } 100ms ease-out`, style({ opacity: '1' }))
          ])
        ])
      ], {optional: true})
    ])
  ]);
}

export function slide (): AnimationTriggerMetadata {
  return trigger('slide', [
    transition(':enter', [
      style({ transform: `translateX(${ Timings.SlideTranslate })`, opacity: '0' }),
      group([
        animate(`${ Timings.SlideDuration } ease-out`, style({ transform: 'translateX(0)' })),
        animate(`${ Timings.SlideDuration } 200ms ease-out`, style({ opacity: '1' }))
      ])
    ])
  ]);
}
