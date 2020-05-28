import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';
import Content from './content';

class App extends React.Component {
  render() {
    return (
      <div>
        <Content tweet={tweets.tweets[0]} />
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");
