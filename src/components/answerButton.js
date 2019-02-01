import React from "react";

const AnswerButton = props => {
  return (
    <li>
      <button onClick={() => props.onClick(props.title)} className="button">
        {props.title}
      </button>
    </li>
  );
};

export default AnswerButton;
