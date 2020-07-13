import React from "react";

const Display = (props) => {
  const arr = props.images;

  const images = arr.map((i) => {
    return (
      <img
        className="image"
        key={i.id}
        src={i.urls.small}
        alt={i.alt_description}
      />
    );
  });
  return <div className="displayContainer">{images}</div>;
};

export default Display;
