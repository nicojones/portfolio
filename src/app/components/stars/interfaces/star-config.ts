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
  /**
   * Largest size an image can have
   */
  maxImgSize: number;
  /**
   * Step to increase image size
   */
  imgSizeStep: number;
  /**
   * Size of the image when generating it
   */
  initialImgSize: number;
}
