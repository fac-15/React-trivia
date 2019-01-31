import React from "react"
import  { render} from "react-dom"

/* ***** api call ***** */

const checkResponse = response => {
    if (response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response.json();
  };
  
  export const getTriviaData = () => {
    return fetch(`http://jservice.io/api/clues?category=11522`)
      .then(checkResponse)
      .catch(err => {
        throw new Error(`fetch getUserData failed ${err}`);
      });
  };
  
  