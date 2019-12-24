import * as React from "react";

export default class TitleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.getDisplay = this.getDisplay.bind(this);
  }

  getDisplay() {
    return this.props.visible ? "initial" : "none";
  }

  render() {
    return (
      <div style={{ display: this.getDisplay() }}>
        <div className="TopBarTitleSearch">
          <input
            className="TopBarTitleSearchInput"
            placeholder="Title Search"
            type="text"
            name="lname"
          />
          <input className="TopBarTitleSearchButton" type="submit" value="" />
        </div>
      </div>
    );
  }
}
