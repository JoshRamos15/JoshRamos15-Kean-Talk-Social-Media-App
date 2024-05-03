import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Make sure to create and import corresponding styles

const slideImages = [
  "https://www.newjerseyalmanac.com/uploads/1/0/9/0/10904396/kean_orig.jpg",
  "https://attsports.com/wp-content/uploads/2021/11/eDJI_0360-scaled.jpg",
  "https://njbmagazine.com/wp-content/uploads/2018/09/KeanRendering.jpg",
  "https://www.northjersey.com/gcdn/presto/2021/05/13/PCNJ/516779db-0ea0-4f15-8257-67252fe317aa-kean1.jpg",
  "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/keanathletics.com/images/2023/9/16/Sura_23A.jpg",
  "https://i0.wp.com/kutower.com/wp-content/uploads/2021/11/Esports3-edited.jpg",
  "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/keanathletics.com/images/2022/9/19/MS022vCent-173_lwLyh.jpg"
];

function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setIndex((current) => (current + 1) % slideImages.length);
    };

    const id = setTimeout(nextSlide, 8000); // Cycle every 8 seconds
    return () => clearTimeout(id);
  }, [index]);

  return (
    <div className="slideshow">
      {slideImages.map((src, i) => (
        <img key={i} src={src} alt={`Slide ${i}`} style={{opacity: i === index ? 1 : 0, transition: 'opacity 1s ease'}} />
      ))}
    </div>
  );
}

export default Slideshow;