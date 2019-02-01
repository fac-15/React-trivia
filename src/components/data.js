import React from "react";
import ReactDOM from "react-dom";
import { getTriviaData } from "../utils/getData.js";
import AnswerButton from "./answerButton";
import style from "../../public/style.css";

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
    if (title === this.state.questionData[0].answer) {
      alert("You got it!");
      getTriviaData().then(data => {
        this.setState({
          questionData: data
        });
      });
    } else {
      console.log(false);
      alert("WRONG");
    }
  };

  //stolen from stack overflow
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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
      answers = this.shuffle(answers);
    }

    return (
      <div className="container">
        <p>{question}</p>
        <div className="buttonsDiv">
          {answers.map(answer => {
            return (
              <AnswerButton
                title={answer.answer}
                onClick={this.onClick}
                key={answer.key}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
