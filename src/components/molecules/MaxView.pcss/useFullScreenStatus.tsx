import { useState, useLayoutEffect } from 'react';

declare global {
  interface Document {
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenElement?: Element;
  }

  interface HTMLElement {
    msRequestFullscreen?: () => Promise<void>;
    mozRequestFullscreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
  }
}

export default function useFullScreenStatus(elRef: any) {
  const [isFullscreen, setIsFullscreen] = useState(document[getBrowserFullscreenElementProp()] !== null);

  const setFullscreen:any = () => {
    if (elRef.current === null) {
      return;
    }

    elRef.current
      .requestFullscreen()
      .then(() => {
        setIsFullscreen(document[getBrowserFullscreenElementProp()] !== null);
      })
      .catch(() => {
        setIsFullscreen(false);
      });
  };

  useLayoutEffect(() => {
    document.onfullscreenchange = () =>
      setIsFullscreen(document[getBrowserFullscreenElementProp()] !== null);
    // @ts-ignore
    return () => (document.onfullscreenchange = undefined);
  });

  return [isFullscreen, setFullscreen];
}

function getBrowserFullscreenElementProp() {
  if (typeof document.fullscreenElement !== 'undefined') {
    return 'fullscreenElement';
  } else if (typeof document.mozFullScreenElement !== 'undefined') {
    return 'mozFullScreenElement';
  } else if (typeof document.msFullscreenElement !== 'undefined') {
    return 'msFullscreenElement';
  } else if (typeof document.webkitFullscreenElement !== 'undefined') {
    return 'webkitFullscreenElement';
  }

  throw new Error('fullscreenElement is not supported by this browser');

}
