import React from "react";

const Member = (props) => {
  return (
    <div className="text-center flex gap-3 bg-orange-500 m-2">
      <img src={props.img} className="mb-2 w-20  rounded-full shadow-lg " />
      <h5 className="mb-2 self-center">{props.name}</h5>
    </div>
  );
};

export default Member;
