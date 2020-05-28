import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';

class App extends React.Component {
  render() {
    return (
      <div>
        {tweets.tweets[0].text}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");
