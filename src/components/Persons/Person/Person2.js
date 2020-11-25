import React from "react";

const person2 = (props) => {
  return (
    <div>
      <p>
        Hello this is the 2nd components with {props.varone} and counter is:  {props.vartwo}
      </p>
      <p>{props.children}</p>
    </div>
  );
};  

export default person2;
