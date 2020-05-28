import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';
import Tweet from './tweet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Tweet tweet={tweets.tweets[0]} />
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");
