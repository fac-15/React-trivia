import React from "react";
import ReactDOM from "react-dom";
import { getTriviaData } from "../utils/getData.js";
import AnswerButton from "./answerButton";

export default class Index extends React.Component {
  state = {
    questionData: {},
    answerData: [],
    idData: []
  };

  componentDidMount() {
    getTriviaData().then(data => {
      const answers = data.map(ele => {
        //pushes an answer to an array in answerData
        this.state.answerData.push(ele.answer);
        this.state.idData.push(ele.id);
        //returns an array of objects containing questions and answers
        return { question: ele.question, answer: ele.answer, id: ele.id };
      });

      this.setState({ questionData: data[0] });
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
    let answers = this.state.answerData;
    return (
      <div>
        <p>{this.state.questionData.question}</p>
        <ul>
          {answers.map(answer => {
            return <AnswerButton title={answer} onClick={this.onClick} />;
          })}
        </ul>
      </div>
    );
  }
}
