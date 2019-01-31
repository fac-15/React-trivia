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
        console.log(this.state.answerData);
        console.log(this.state.idData);
        return { question: ele.question, answer: ele.answer, id: ele.id };
      });
      console.log(answers);

      this.setState({ questionData: data[0] });
      console.log(this.state.questionData);
    });
  }

  render() {
    let answers = this.state.answerData;
    // let id = this.state.idData;
    console.log("this this", answers);
    return (
      <div>
        <p>{this.state.questionData.question}</p>
        <ul>
          {answers.map(answer => {
            console.log(answer);
            return (
              <AnswerButton title={answer} key={answer} htmlFor={answer} />
            );
          })}
        </ul>
      </div>
    );
  }
}
