import {OperatingSystem} from "~app/shared/enums";


export interface ClientOs {
  /**
   * Will return `true` if it's an iOS or Android device.
   */
  isMobile: boolean;

  /**
   * The name of the OS
   */
  os: OperatingSystem;
}
