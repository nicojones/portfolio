import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {Timings} from "~app/shared/animations/timings.animation";


/**
 * A shortcut for the Animation below
 * If you pass a `finalOpacity` explicitly, the name of the function will change -> 0.7 -> `fadeIn0.7`
 * @param staggerTime
 * @param duration
 * @param delay
 * @param finalOpacity
 */
export function fadeIn(
  staggerTime: number = Timings.FADEIN_STAGGER_TIME,
  duration: string = Timings.FADEIN_DURATION,
  delay: number = Timings.FADEIN_DELAY,
  finalOpacity: number = null
) {
  // export function fadeIn(timings: string = Timings.CubicBezier) {
  return trigger(`fadeIn${finalOpacity || ""}`, [
    transition(":enter", [
      query(".fade-in", [
        style({opacity: 0}),
        stagger(staggerTime, [
          animate(duration, style({opacity: finalOpacity || 1}))
        ])
      ])
    ], {delay: delay}),

    transition(":leave", [
      style({opacity: 1}),
      animate(duration, style({opacity: 0}))
    ], {delay})
  ]);
}
