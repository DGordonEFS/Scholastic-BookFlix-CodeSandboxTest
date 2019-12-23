import * as React from "react";

import TitleSearch from "./titlesearch";
import SpanishBox from "./spanishbox";

export default class TopScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onIconClick = this.onIconClick.bind(this);
  }

  onIconClick() {
    if (this.props.onIconClick !== undefined) this.props.onIconClick();
  }

  render() {
    return (
      <div className="TopBar">
        <img
          onMouseUp={() => this.onIconClick()}
          className="TopBarIcon"
          src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/BookFlix_logo_Final_R.png"
        />
        <div className="TopBarRightSide">
          <TitleSearch />
          <SpanishBox />
          <div className="TopBarExit" />
        </div>
      </div>
    );
  }
}
