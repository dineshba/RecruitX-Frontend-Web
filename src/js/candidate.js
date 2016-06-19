import React from "react"

const Candidate = React.createClass({
  render() {
    return(
      <div>
        <div> {this.props.candidate.first_name}</div>
        <div> {this.props.candidate.last_name}</div>
      </div>
    );
  }
});

export default Candidate;
