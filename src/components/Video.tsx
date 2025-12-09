import video from "../assets/libraryVideo.mp4";

const Video = () => {
  return (
    <div>
      <video
        src={video}
        controls
        autoPlay
        muted
        className="object-cover max-h-[470px] w-full "
      ></video>
    </div>
  );
};

export default Video;
