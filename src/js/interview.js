import React from "react"
import Candidate from "./candidate.js"

const Interview = React.createClass({
  render() {
    return(
      <div>
        <Candidate candidate={this.props.interview.candidate} />
        <p>{this.props.interview.start_time}</p>
      </div>
    );
  }
});

export default Interview;
