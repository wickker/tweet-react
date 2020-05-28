import React from "react";
import CommentIcon from "comment-icon";
import RetweetIcon from "retweet-icon";
import HeartIcon from "heart-icon";

export default class Content extends React.Component {
  render() {

    let str = this.props.tweet.text;
    let pattern = new RegExp("https://")
    let result = pattern.test(str);
    let content;
    let date;

    if (result) {
      let splitStr = str.split("https://");
      let link = "https://" + splitStr[1];
      if (splitStr[0] === "") {
        content = (<a href={link} target="_blank">link</a>);
      } else {
        content = (<a href={link} target="_blank">{splitStr[0]}</a>);
      }
    } else {
      content = str;
    }

    date = new Date(this.props.tweet.created_at);
    date = date.toLocaleDateString();

    return (
      <div class="col-11">
        <p>
          <strong>{this.props.tweet.user.name}</strong>
          <span>@{this.props.tweet.user.screen_name}</span>
          <span> | {date}</span>
        </p>
        <p>{content}</p>
        <div class="row">
          <div class="col">
            <CommentIcon />&nbsp;
             XXX
          </div>
          <div class="col">
            <RetweetIcon />&nbsp;
             {this.props.tweet.retweet_count}
          </div>
          <div class="col">
            <HeartIcon />&nbsp;
            {this.props.tweet.favorite_count}
          </div>
        </div>
      </div>
    );
  }
}
