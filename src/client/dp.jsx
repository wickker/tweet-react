import React from "react";

export default class Dp extends React.Component {
  render() {
    return (
      <div class="col-1">
        <a href="#" class="tip">
          <img
            class="dp"
            src={this.props.tweet.user.profile_image_url}
            alt="display picture"
          ></img>
          <div class="mouse-over">
            <p>@{this.props.tweet.user.screen_name}</p>
            <p>
              <strong>{this.props.tweet.user.friends_count}</strong> Following
            </p>
            <p>
              <strong>{this.props.tweet.user.followers_count}</strong> Followers
            </p>
          </div>
        </a>
      </div>
    );
  }
}
