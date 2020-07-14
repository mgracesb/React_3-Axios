import React from "react";
import Card from "./Card";

const Display = (props) => {
  const arr = props.images;

  const images = arr.map((i) => {
    return <Card className="image" key={i.id} image={i} />;
  });
  return <div className="displayContainer">{images}</div>;
};

export default Display;
