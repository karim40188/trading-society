import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Reset state when video source changes
    setIsPlaying(false);
    setIsBuffering(false);
    setHasError(false);
    setIsReady(false);
  }, [src]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBuffer = () => {
    setIsBuffering(true);
  };

  const handleBufferEnd = () => {
    setIsBuffering(false);
  };

  const handleReady = () => {
    setIsReady(true);
    setIsBuffering(false);
  };

  const handleError = (e) => {
    console.error("Video error:", e);
    setHasError(true);
    setIsBuffering(false);
  };

  if (!src) {
    return (
      <div className="video_container error">
        <div className="error_message">No video source available</div>
      </div>
    );
  }

  return (
    <div className="video_container">
      <div className="video_wrapper">
        {isBuffering && (
          <div className="spinner_container">
            <div className="spinner">⏳</div>
          </div>
        )}
        
        {hasError ? (
          <div className="error_message">
            <p>Failed to load video</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        ) : (
          <ReactPlayer
            url={src}
            playing={isPlaying}
            controls={true}
            width="100%"
            height="100%"
            onReady={handleReady}
            onBuffer={handleBuffer}
            onBufferEnd={handleBufferEnd}
            onError={handleError}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            config={{
              file: {
                attributes: {
                  preload: 'auto',
                  crossOrigin: 'anonymous',
                  controlsList: 'nodownload',
                },
                forceVideo: true,
              },
            }}
          />
        )}
        
        {isReady && !hasError && (
          <div className="controller">
            <button
              onClick={handlePlayPause}
              className={`play_pause_btn ${isPlaying ? 'pause' : 'play'}`}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
