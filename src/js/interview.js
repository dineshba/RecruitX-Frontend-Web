import React from "react"

const Interview = React.createClass({
  render() {
    return(
      <div>
        <p>{this.props.interview.candidate.first_name} {this.props.interview.candidate.last_name}</p>
        <p>{this.props.interview.start_time}</p>
      </div>
    );
  }
});

export default Interview;
