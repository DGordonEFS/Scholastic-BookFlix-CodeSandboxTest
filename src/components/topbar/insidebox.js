import * as React from "react";

export default class InsideBox extends React.Component {
  constructor(props) {
    super(props);
    this.getDisplay = this.getDisplay.bind(this);
  }

  getDisplay() {
    return this.props.visible ? "initial" : "none";
  }

  render() {
    var text = "You're in: ";
    if (this.props.entry !== undefined) text += this.props.entry.inside;

    return (
      <div style={{ display: this.getDisplay() }}>
        <div className="TopBarInsideBoxContainer">
          <div className="TopBarInsideBox">{text}</div>
        </div>
      </div>
    );
  }
}
