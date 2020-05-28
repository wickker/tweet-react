import React from "react";
import Dp from './dp';
import Content from './content';

export default class Tweet extends React.Component {
  render() {
    return (
      <div class="row">
        <Dp tweet={this.props.tweet} />
        <Content tweet={this.props.tweet} />
      </div>
    );
  }
}
