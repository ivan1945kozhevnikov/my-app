import { useRef } from 'react';

const VideoPlayer = () => {
  const ref = useRef();

  const handlePlay = () => {
    ref.current.play();
  };

  const handlePause = () => {
    ref.current.pause();
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <video
        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
        ref={ref}
        width="300"
      />
    </div>
  );
};

export default VideoPlayer;
