import React from "react"
import ReactDOM from "react-dom"

class Recruitx extends React.Component {
  render() {
    return(
      <div> Welcome to Recruitx </div>
    );
  }
}

var app = document.getElementById('app');

ReactDOM.render(<Recruitx/>, app);
