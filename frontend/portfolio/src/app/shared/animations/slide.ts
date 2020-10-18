import { animate, AnimationTriggerMetadata, group, style, transition, trigger } from '@angular/animations';


export function slide (): AnimationTriggerMetadata {
  return trigger('slide', [
    transition(':enter', [
      style({ transform: 'translateX(-80px)', opacity: '0' }),
      group([
        animate('400ms ease-out', style({ transform: 'translateX(0)' })),
        animate('400ms 200ms ease-out', style({ opacity: '1' }))
      ])
    ])
    /**
     * @note (Daniel) Use this to create a leave movement (element destroy)
     */
    // transition(':leave', [
    //   style({transform: 'translateX(0)', opacity: '1'}),
    //   group([
    //     animate('200ms ease-out', style({transform: 'translateX(-80px)'})),
    //     animate('200ms ease-out', style({opacity: '0'}))
    //   ])
    // ])
  ]);
}
