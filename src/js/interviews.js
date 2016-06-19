import React from "react"
import Interview from "./interview.js"

const Interviews = React.createClass({
  getInitialState() {
    return {interviews: []}
  },
  componentDidMount: function() {
    this.state.data = fetch(api_url, {
      headers: {
        'Accepts': 'application/json',
        'Authorization': api_key,
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({interviews: responseData})
  });
  },
  render() {
    const interviews = this.state.interviews.map((interview) => <Interview interview={interview} key={interview.id} />);
    return(
      <div>
      {interviews}
      </div>
    );
  }
});

export default Interviews;
