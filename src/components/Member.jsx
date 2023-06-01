import React from "react";

const Member = (props) => {
  return (
    <div class="text-center flex gap-3 bg-orange-500 m-2">
      <img src={props.img} class="mb-2 w-20  rounded-full shadow-lg " />
      <h5 class="mb-2 self-center">{props.name}</h5>
    </div>
  );
};

export default Member;
