import React from "react"
import { render } from "react-dom"
import { getTriviaData } from "../utils/getData.js"

export default class Index extends React.Component {
    state = {
      questionData: {}
    };

    componentDidMount (){
        getTriviaData()
         .then(data => this.setState({questionData: data}))
        
        };
  
  
  

  render(){
      return <p>Hello</p>
  }
    }