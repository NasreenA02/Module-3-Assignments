import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3",
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="card">
      <h2>Image Slideshow</h2>
      <img src={images[index]} alt={`Slide ${index + 1}`} />
      <div style={{ marginTop: "10px" }}>
        <button onClick={prev}>Previous</button>
        <button onClick={next} style={{ marginLeft: "10px" }}>Next</button>
      </div>
    </div>
  );
}
