export interface Star {
  x: number;
  y: number;
  z: number;
  color: string; // RGB: "100,123,300"
}

export interface Position2D {
  x: number;
  y: number;
}

export interface ClientScreen {
  w: number;
  h: number;
}

export interface Velocity {
  x: number;
  y: number;
  xMomentum: number;
  yMomentum: number;
  /**
   * velocity in the Z-axis
   */
  z: number;
}

export interface StarConfig {
  /**
   * How much stars move when you move the cursor
   */
  moveEaseness: number;
  /**
   * The density in the canvas. Higher means more stars
   */
  starDensity: number;
  /**
   * Set it higher to see FEWER colored stars
   */
  colorLimit: number;
  /**
   * Size of the stars
   */
  size: number;
  /**
   * The smallest stars possible. Smaller means there will be smaller stars.
   */
  starMinScale: number;
  /**
   * When to recycle stars
   */
  overflow: number;
  /**
   * Original Z-velocity, for stars. Default: 0.005
   */
  zVelocity: number;
}
