import * as React from "react";

import "./../../../css/entry/start.css";

export default class StartBox extends React.Component {
  render() {
    return (
      <div className="EntryStartBox">
        <div className="EntryStartBoxInner">{this.props.children}</div>
        <div className="EntryStartBoxBottom">
          <img
            className="EntryStartBoxBottomIcon"
            alt="icon"
            src={this.props.icon}
          />
          <div className="EntryStartBoxBottomText">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
