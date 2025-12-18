import { useEffect, useRef, useState } from "react";
import playSymbol from "../assets/playSymbol.png";

const Video = () => {
  const docVideoRef = useRef<any>(undefined);
  const [videoMode, setVideoMode] = useState(false);

  useEffect(() => {
    if (videoMode) {
      docVideoRef.current.play();
    } else {
      docVideoRef.current.pause();
    }
  }, [videoMode]);

  return (
    <div className="relative max-h-[470px] w-full cursor-pointer">
      <video
        className="object-cover h-full w-full "
        ref={docVideoRef}
        onClick={() => setVideoMode(!videoMode)}
      >
        <source src="/videos/libraryVideo.mp4" />
      </video>
      <img
        src={playSymbol}
        className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hover:scale-[1.2] ${
          videoMode ? "hidden" : "block"
        }`}
        onClick={() => setVideoMode(!videoMode)}
      />
    </div>
  );
};

export default Video;
