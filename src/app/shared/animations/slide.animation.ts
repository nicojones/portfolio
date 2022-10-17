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
import {Timings} from '~app/shared/animations/timings.animation';


export function slideIn (selector: string = '.slide-in'): AnimationTriggerMetadata {
  return trigger('slideIn', [
    transition(':enter', [
      query(selector, [
        style({transform: `translateX(${Timings.SLIDE_TRANSLATE})`, opacity: '0'}),
        stagger(Timings.SLIDE_STAGGER_TIME, [
          group([
            animate(`${Timings.SLIDE_DURATION} ease-out`, style({transform: 'translateX(0)'})),
            animate(`${Timings.SLIDE_DURATION} 100ms ease-out`, style({opacity: '1'}))
          ])
        ])
      ], {optional: true})
    ])
  ]);
}

export function slide (): AnimationTriggerMetadata {
  return trigger('slide', [
    transition(':enter', [
      style({transform: `translateX(${Timings.SLIDE_TRANSLATE})`, opacity: '0'}),
      group([
        animate(`${Timings.SLIDE_DURATION} ease-out`, style({transform: 'translateX(0)'})),
        animate(`${Timings.SLIDE_DURATION} 200ms ease-out`, style({opacity: '1'}))
      ])
    ])
  ]);
}
