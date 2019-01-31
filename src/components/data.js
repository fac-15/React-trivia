import React from "react";
import { render } from "react-dom";
import { getTriviaData } from "../utils/getData.js";

export default class Index extends React.Component {
  state = {
    questionData: {},
    answerData: []
  };

  componentDidMount() {
    getTriviaData().then(data => {
      const answers = data.map(ele => {
        //pushes an answer to an array in answerData
        this.state.answerData.push(ele.answer);
        //returns an array of objects containing questions and answers
        console.log(this.state.answerData);
        return { question: ele.question, answer: ele.answer };
      });
      console.log(answers);

      this.setState({ questionData: data[0] });
      console.log(this.state.questionData);
    });
  }

  render() {
    let answers = this.state.answerData;
    return (
      <div>
        <p>{this.state.questionData.question}</p>
        <ul>
          {answers.map(answer => {
            return <button>{answer}</button>;
          })}
        </ul>
      </div>
    );
  }
}
