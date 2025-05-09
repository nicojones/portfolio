export interface Position2D {
  x: number;
  y: number;
}

export interface CelestialPosition extends Position2D {
  z: number;
}

export interface Star extends CelestialPosition {
  color: string; // RGB: "100,123,300"
}


export interface ClientScreen {
  w: number;
  h: number;
}

export interface Spacetime extends CelestialPosition {
  xMomentum: number;
  yMomentum: number;
}
