import * as React from "react";

import TitleSearch from "./titlesearch";
import SpanishBox from "./spanishbox";
import InsideBox from "./insidebox";

export default class TopScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onIconClick = this.onIconClick.bind(this);
  }

  onIconClick() {
    if (this.props.onIconClick !== undefined) this.props.onIconClick();
  }

  render() {
    var displayHome = this.props.home == true ? "initial" : "none";
    return (
      <div className="TopBar">
        <div className="TopBarLeftSide">
          <img
            onMouseUp={() => this.onIconClick()}
            className="TopBarIcon"
            src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/BookFlix_logo_Final_R.png"
          />
          <input
            className="TopBarHomeButton"
            type="submit"
            value=""
            style={{ display: displayHome }}
            onMouseUp={() => this.onIconClick()}
          />
        </div>
        <div className="TopBarRightSide">
          <InsideBox
            entry={this.props.entry}
            visible={this.props.entry !== undefined}
          />
          <TitleSearch visible={this.props.entry == undefined} />
          <SpanishBox visible={this.props.entry == undefined} />
          <div className="TopBarExit" />
        </div>
      </div>
    );
  }
}
