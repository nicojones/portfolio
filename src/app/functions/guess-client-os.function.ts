import {OperatingSystem, StorageKey} from "~app/shared/enums";
import {ClientOs} from "~app/shared/interfaces";
import {getLocalStorage} from "~app/services";
import {getWindow} from "~app/functions/get-window.function";


/**
 * Function from StackOverflow to detect OS. Maybe not needed, but it's just to be fancy
 * {@url https://stackoverflow.com/a/38241481/2016686}
 */
export function guessClientOS(): ClientOs {
  /**
   * As detected by the browser.
   */
  const platform = getWindow().navigator.platform;

  /**
   * These are the possible values
   */
  const macOsPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];

  /**
   * This is what we need to guess.
   */
  let os: OperatingSystem = OperatingSystem.UNKNOWN;
  let isMobile = false;

  if (macOsPlatforms.indexOf(platform) !== -1) {
    os = OperatingSystem.MAC_OS;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = OperatingSystem.WINDOWS;
  } else if (/Linux/.test(platform)) {
    os = OperatingSystem.LINUX;
  } else {
    // Otherwise, we try with phones...
    const userAgent = getWindow().navigator.userAgent;
    const iosPlatforms = ["iPhone", "iPad", "iPod"];
    if (/Android/.test(userAgent)) {
      os = OperatingSystem.ANDROID;
      isMobile = true;
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = OperatingSystem.IOS;
      isMobile = true;
    }
  }

  return { isMobile, os };
}


/**
 * Saves the OS/Browser guess in the local storage. we don't need this every time...
 */
export function detectAndSaveOS (): ClientOs {
  let clientOS: ClientOs = getLocalStorage().getItem(StorageKey.CLIENT_OS);
  if (!clientOS) {
    clientOS = guessClientOS();
    getLocalStorage().setItem(StorageKey.CLIENT_OS, clientOS);
  }
  return clientOS;
}
