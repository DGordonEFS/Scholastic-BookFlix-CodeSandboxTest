import * as React from "react";
import { Redirect } from "react-router-dom";

import TopBar from "./../topbar/topbar";

export default class EntryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iconClicked: false };

    this.onSelect = this.onSelect.bind(this);
    this.onIconClick = this.onIconClick.bind(this);
  }

  onSelect(index) {}

  onIconClick() {
    this.setState({ iconClicked: true });
  }

  render() {
    if (this.state.iconClicked) {
      return <Redirect to="/" push={true} />;
    }

    const { params } = this.props.match;

    console.log("entry screen");
    var category = this.props.data[params.category];
    var entry = category.books[params.id];

    console.log(entry.inside);

    document.body.style.backgroundImage = "url(" + category.background + ")";

    var onSelect = this.onSelect;

    return (
      <div className="BookFlix">
        <div className="Category">
          <TopBar home={true} onIconClick={() => this.onIconClick()} />
        </div>
      </div>
    );
  }
}
