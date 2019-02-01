import React from "react";

const AnswerButton = props => {
  return (
    <button onClick={() => props.onClick(props.title)} className="button">
      {props.title}
    </button>
  );
};

export default AnswerButton;
