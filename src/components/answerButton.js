import React from "react";

const AnswerButton = props => {
  return (
    <li>
      <button onClick={() => props.onClick(props.id)} className="button">
        {props.title}
      </button>
    </li>
  );
};

export default AnswerButton;
