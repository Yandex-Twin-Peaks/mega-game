import React, { useRef } from 'react';
import useFullScreenStatus from './useFullScreenStatus';
import './MaxView.pcss';


export default function MaxView({ children, backgroundColor }:any) {
  const maximizableElement = useRef(null);
  let isFullscreen, setIsFullscreen;
  let errorMessage;

  try {
    [isFullscreen, setIsFullscreen] = useFullScreenStatus(maximizableElement);
  } catch (e) {
    errorMessage = 'Fullscreen not supported';
    isFullscreen = false;
    setIsFullscreen = undefined;
  }

  const handleExitFullscreen = () => document.exitFullscreen();

  return (
    <div
      ref={maximizableElement}
      className={`maximizable-container ${
        isFullscreen ? 'fullscreen' : 'default'
      }`}
      style={{ backgroundColor: isFullscreen ? backgroundColor : null }}
    >
      <div className='maximizable-actions'>
        {errorMessage ? (
          <button
            onClick={() =>
              alert('Fullscreen is unsupported by this browser, please try another browser.')
            }
          >
            {errorMessage}
          </button>
        ) : isFullscreen ? (
          <button onClick={handleExitFullscreen}>🔍</button>
        ) : (
          <button onClick={setIsFullscreen}>🔍</button>
        )}
      </div>
      <div className='maximizable-content'>{children}</div>

    </div>
  );
}
