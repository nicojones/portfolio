import {CelestialPosition} from "~app/components/stars/interfaces/star";


export interface StarWanderer extends CelestialPosition {
  img: HTMLImageElement;
  size: number;
}
