import React, { useState, useEffect } from "react";

function BlinkingImages(props) {
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImages(prevState => !prevState);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {showImages &&
        props.images.map((image, index) => (
          <img key={index} src={image} alt="blinking" />
        ))}
    </div>
  );
}

export default BlinkingImages;
