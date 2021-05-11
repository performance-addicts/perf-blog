import React from "react";

export default function YouTube({ width, height, videoId }) {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
