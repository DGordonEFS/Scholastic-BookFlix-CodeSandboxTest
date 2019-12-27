import * as React from "react";
import { Redirect } from "react-router-dom";

import TopBar from "./../topbar/topbar";
import SideBar from "./sidebar";

import StartContents from "./contents/start";
import WatchContents from "./contents/watch";
import ReadContents from "./contents/read";
import PuzzlersContents from "./contents/puzzlers";
import MatchContents from "./contents/match";
import CameFirstContents from "./contents/camefirst";
import DiveDeeperContents from "./contents/dive";
import ExploreContents from "./contents/explore";
import MeetContents from "./contents/meet";

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

const modes = {
  SIDEBAR: 0,
  CONTENTS: 1
};

export default class EntryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconClicked: false,
      goBack: false,
      selectedIndex: 0,
      mode: 1
    };

    this.onSelect = this.onSelect.bind(this);
    this.onIconClick = this.onIconClick.bind(this);
    this.getContents = this.getContents.bind(this);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.updateWindowDimensions.bind(this)
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onSelect(index) {
    this.setState({ selectedIndex: index });
  }

  onIconClick() {
    this.setState({ iconClicked: true });
  }

  getContents() {
    const { params } = this.props.match;
    var category = this.props.data[params.category];
    var entry = category.books[params.id];

    switch (this.state.selectedIndex) {
      case categories.START:
        return <StartContents book1={entry.book1} book2={entry.book2} />;
      case categories.WATCH_THE_STORY:
        return <WatchContents />;
      case categories.READ_THE_BOOK:
        return <ReadContents />;
      case categories.PUZZLERS:
        return <PuzzlersContents />;
      case categories.WORD_MATCH:
        return <MatchContents />;
      case categories.WHICH_COMES_FIRST:
        return <CameFirstContents />;
      case categories.DIVE_DEEPER:
        return <DiveDeeperContents />;
      case categories.EXPLORE_THE_WEB:
        return <ExploreContents />;
      case categories.MEET_THE_CREATORS:
        return <MeetContents />;
      default:
        return null;
    }
  }

  getEntryArea() {
    const { params } = this.props.match;

    var category = this.props.data[params.category];
    var entry = category.books[params.id];

    return (
      <div className="EntryArea">
        <SideBar
          category={category.title}
          color={category.color}
          onSelectState={index => this.onSelect(index)}
          selectedIndex={this.state.selectedIndex}
          onGoBack={() => this.setState({ goBack: true })}
        />
        <div className="EntryContents">{this.getContents()}</div>
      </div>
    );
  }

  getEntrySideBar() {
    const { params } = this.props.match;

    var category = this.props.data[params.category];
    var entry = category.books[params.id];

    return (
      <div className="EntryArea">
        <div className="EntryMode">
          <img
            className="EntryModeButton"
            src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/mobile-start-button.svg"
            onMouseUp={() => this.toggleMode()}
          />
          <div className="EntryModeText">Start</div>
        </div>
        <SideBar
          category={category.title}
          color={category.color}
          onSelectState={index => this.onSelect(index)}
          selectedIndex={this.state.selectedIndex}
          onGoBack={() => this.setState({ goBack: true })}
        />
      </div>
    );
  }

  getEntryContents() {
    const { params } = this.props.match;

    var category = this.props.data[params.category];
    var entry = category.books[params.id];

    return (
      <div className="EntryArea">
        <div className="EntryMode">
          <img
            className="EntryModeButton"
            src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/mobile-start-button.svg"
            onMouseUp={() => this.toggleMode()}
          />
          <div className="EntryModeText">Start</div>
        </div>
        <div className="EntryContents">{this.getContents()}</div>
      </div>
    );
  }

  getEntry() {
    if (this.state.width >= 1024) return this.getEntryArea();
    else if (this.state.mode == modes.SIDEBAR) return this.getEntrySideBar();
    else if (this.state.mode == modes.CONTENTS) return this.getEntryContents();
  }

  toggleMode() {
    if (this.state.mode === modes.SIDEBAR)
      this.setState({ mode: modes.CONTENTS });
    else this.setState({ mode: modes.SIDEBAR });
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

    return (
      <div className="BookFlix">
        <TopBar
          entry={entry}
          home={true}
          onIconClick={() => this.onIconClick()}
        />
        <div className="Entry">{this.getEntry()}</div>
      </div>
    );
  }
}
