import React from "react";

const YoutubeVideo = () => {
  return (
    <div>
      <iframe
        className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZVq4hQ-o2pU?si=BVYutqWHeZ-RTPWH"
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
