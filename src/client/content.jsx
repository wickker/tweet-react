import React from "react";
import CommentIcon from "comment-icon";
import RetweetIcon from "retweet-icon";
import HeartIcon from "heart-icon";

export default class Content extends React.Component {
  render() {
    return (
      <div class="col-10">
        <p>
          <strong>{this.props.tweet.user.name}</strong>
          <span>@{this.props.tweet.user.screen_name}</span>
        </p>
        <p>{this.props.tweet.text}</p>
        <div class="row">
          <div class="col">
            <CommentIcon />
            XXX
          </div>
          <div class="col">
            <RetweetIcon />
            {this.props.tweet.retweet_count}
          </div>
          <div class="col">
            <HeartIcon />
            {this.props.tweet.favorite_count}
          </div>
        </div>
      </div>
    );
  }
}
