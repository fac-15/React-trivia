import React from "react";

const AnswerButton = props => {
  <li>
    <button title="props.answer" onClick={() => props.onClick()} class="button">
      {props.answer}
    </button>
  </li>;
};

export default AnswerButton;
