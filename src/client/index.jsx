import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';
import Tweet from './tweet';

class App extends React.Component {
  render() {

    let tweetsArr = tweets.tweets.map((tweet) => {
      return <Tweet tweet={tweet} />
    });

    return (
      <div>
        {tweetsArr}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");
