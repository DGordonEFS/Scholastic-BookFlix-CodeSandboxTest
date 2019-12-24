import * as React from "react";
import { Redirect } from "react-router-dom";

import TopBar from "./../topbar/topbar";
import SideBar from "./sidebar";

import "./../../css/entry.css";

const categories = {
  START: 0,
  WATCH_THE_STORY: 1,
  READ_THE_BOOK: 2,
  PUZZLERS: 3,
  WORD_MATCH: 4,
  WHICH_COMES_FIRST: 5,
  DIVE_DEEPER: 6,
  EXPLORE_THE_WEB: 7,
  MEET_THE_CREATORS: 8
};

export default class EntryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iconClicked: false, goBack: false, selectedIndex: -1 };

    this.onSelect = this.onSelect.bind(this);
    this.onIconClick = this.onIconClick.bind(this);
    this.getContents = this.getContents.bind(this);
  }

  onSelect(index) {
    this.setState({ selectedIndex: index });
  }

  onIconClick() {
    this.setState({ iconClicked: true });
  }

  getContents() {
    switch (this.selectedIndex) {
      case categories.START:
        break;
      case categories.WATCH_THE_STORY:
        break;
      case categories.READ_THE_BOOK:
        break;
      case categories.PUZZLERS:
        break;
      case categories.WORD_MATCH:
        break;
      case categories.WHICH_COMES_FIRST:
        break;
      case categories.DIVE_DEEPER:
        break;
      case categories.EXPLORE_THE_WEB:
        break;
      case categories.MEET_THE_CREATORS:
        break;
    }
  }

  render() {
    const { params } = this.props.match;

    var category = this.props.data[params.category];
    var entry = category.books[params.id];

    if (this.state.iconClicked) {
      return <Redirect to="/" push={true} />;
    }

    if (this.state.goBack) {
      var url = "/category/" + params.category;
      return <Redirect to={url} push={true} />;
    }

    document.body.style.backgroundImage = "url(" + category.background + ")";

    var onSelect = this.onSelect;

    return (
      <div className="BookFlix">
        <div className="Entry">
          <TopBar
            entry={entry}
            home={true}
            onIconClick={() => this.onIconClick()}
          />
          <div>
            <SideBar
              category={category.title}
              color={category.color}
              onSelectState={index => this.onSelect(index)}
              selectedIndex={this.state.selectedIndex}
              onGoBack={() => this.setState({ goBack: true })}
            />
          </div>
        </div>
      </div>
    );
  }
}
