import React from "react";

export default class Dp extends React.Component {
  render() {
    return (
      <div class="col-2">
        <img
          src={this.props.tweet.user.profile_image_url}
          alt="display picture"
        ></img>
      </div>
    );
  }
}
