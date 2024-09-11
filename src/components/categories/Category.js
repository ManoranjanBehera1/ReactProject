import React from "react";

export default function Category(props) {
  return (
    <div className="text-center category">
      <img src={props.category.img_src} alt="No img" />
      <div>
        <span>{props.category.name}</span>
      </div>
    </div>
  );
}
