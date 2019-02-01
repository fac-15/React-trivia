import React from "react";
import ReactDOM from "react-dom";
import { getTriviaData } from "../utils/getData.js";
import AnswerButton from "./answerButton";

export default class Index extends React.Component {
  state = {
    questionData: []
  };

  componentDidMount() {
    getTriviaData().then(data => {
      this.setState({
        questionData: data
      });
    });
  }

  onClick = title => {
    if (title === this.state.questionData.answer) {
      console.log(true);
      alert("You got it!");
      // When the button matches the answer the api should be called again to fetch new info
    } else {
      console.log(false);
      alert("WRONG");
    }
  };

  render() {
    let question = "Loading...";
    let answers = [];

    if (this.state.questionData.length !== 0) {
      question = this.state.questionData[0].question;
      answers = this.state.questionData.map(ele => {
        return {
          answer: ele.answer,
          key: ele.id
        };
      });
    }

    return (
      <div>
        <p>{question}</p>
        <ul>
          {answers.map(answer => {
            return (
              <AnswerButton
                title={answer.answer}
                onClick={this.onClick}
                key={answer.key}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
