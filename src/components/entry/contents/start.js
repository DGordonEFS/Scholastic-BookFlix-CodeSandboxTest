import * as React from "react";

import StartBox from "./startbox";

export default class Start extends React.Component {
  render() {
    return (
      <div className="EntryStart">
        <StartBox
          icon="https://da-content.digital.scholastic.com/bfx/prod/assets/img/wts.png"
          text="Watch the Story"
        >
          <img
            className="EntryStartLogo"
            src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/weston-woods-color.png"
          />
          <img className="EntryStartBook1" src={this.props.book1} />
        </StartBox>
        <StartBox
          icon="https://da-content.digital.scholastic.com/bfx/prod/assets/img/rtb.png"
          text="Read the Book"
        >
          <img className="EntryStartBook2" src={this.props.book2} />
        </StartBox>
      </div>
    );
  }
}
