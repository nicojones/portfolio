import { OperatingSystem, StorageKey } from '~app/shared/enums';
import { ClientOs } from '~app/shared/interfaces';
import { getLocalStorage } from '~app/services';


/**
 * Function from StackOverflow to detect OS. Maybe not needed, but it's just to be fancy
 * {@url https://stackoverflow.com/a/38241481/2016686}
 */
export function guessClientOS (): ClientOs {
  /**
   * As detected by the browser.
   */
  const platform = window.navigator.platform;

  /**
   * These are the possible values
   */
  const macOsPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

  /**
   * This is what we need to guess.
   */
  let os: OperatingSystem = OperatingSystem.Unknown;
  let isMobile: boolean = false;

  if (macOsPlatforms.indexOf(platform) !== -1) {
    os = OperatingSystem.MacOS;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = OperatingSystem.Windows;
  } else if (/Linux/.test(platform)) {
    os = OperatingSystem.Linux;
  } else {
    // Otherwise, we try with phones...
    const userAgent = window.navigator.userAgent;
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    if (/Android/.test(userAgent)) {
      os = OperatingSystem.Android;
      isMobile = true;
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = OperatingSystem.iOS;
      isMobile = true;
    }
  }

  return { isMobile, os };
}


/**
 * Saves the OS/Browser guess in the local storage. we don't need this every time...
 */
export function detectAndSaveOS (): ClientOs {
  let clientOS: ClientOs = getLocalStorage().getItem(StorageKey.ClientOS)
  if (!clientOS) {
    clientOS = guessClientOS()
    getLocalStorage().setItem(StorageKey.ClientOS, clientOS);
  }
  return clientOS;
}
