import React from "react"
import ReactDOM from "react-dom"
import Interviews from "./interviews.js"

class Recruitx extends React.Component {
  render() {
    return(
      <div>
      <div> Welcome to Recruitx </div>
      <Interviews />
      </div>
    );
  }
}

var app = document.getElementById('app');

ReactDOM.render(<Recruitx/>, app);
