import * as React from "react";
import SideBarButton from "./sidebarbutton";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getDisplay = this.getDisplay.bind(this);
    this.onSelectState = this.onSelectState.bind(this);
  }

  getDisplay() {
    return this.props.visible ? "initial" : "none";
  }

  onSelectState(index) {
    if (this.props.onSelectState !== undefined) this.props.onSelectState(index);
  }

  render() {
    return (
      <div className="EntrySideBar">
        <div
          className="EntrySideBarText"
          onMouseUp={() => this.onSelectState(0)}
        >
          Start
        </div>
        <SideBarButton
          image="https://da-content.digital.scholastic.com/bfx/prod/assets/img/wts.svg"
          text="Watch the Story"
          selected={this.props.selectedIndex === 1}
          onSelect={() => this.onSelectState(1)}
        />
        <SideBarButton
          image="https://da-content.digital.scholastic.com/bfx/prod/assets/img/rtb.svg"
          text="Read the Book"
          selected={this.props.selectedIndex === 2}
          onSelect={() => this.onSelectState(2)}
        />
        <div
          className="EntrySideBarText"
          onMouseUp={() => this.onSelectState(3)}
        >
          Puzzlers!
        </div>
        <SideBarButton
          image="https://da-content.digital.scholastic.com/bfx/prod/assets/img/word-match.svg"
          text="Word Match"
          selected={this.props.selectedIndex === 4}
          onSelect={() => this.onSelectState(4)}
        />
        <SideBarButton
          image="https://da-content.digital.scholastic.com/bfx/prod/assets/img/which-came-first.svg"
          text="Which Came First?"
          selected={this.props.selectedIndex === 5}
          onSelect={() => this.onSelectState(5)}
        />
        <div
          className="EntrySideBarText"
          onMouseUp={() => this.onSelectState(6)}
        >
          Dive Deeper
        </div>
        <SideBarButton
          image="https://da-content.digital.scholastic.com/bfx/prod/assets/img/explore-the-web.png"
          text="Explore the Web"
          selected={this.props.selectedIndex === 7}
          onSelect={() => this.onSelectState(7)}
        />
        <SideBarButton
          image="https://da-content.digital.scholastic.com/bfx/prod/assets/img/meet-the-creators.png"
          text="Meet the Creators"
          selected={this.props.selectedIndex === 8}
          onSelect={() => this.onSelectState(8)}
        />
        <div
          className="EntrySideBarBack"
          style={{ backgroundColor: this.props.color }}
          onMouseUp={() => this.props.onGoBack()}
        >
          <img
            className="EntrySideBarButtonImage"
            src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/arrow-left.png"
          />
          <div className="EntrySideBarBackText">{this.props.category}</div>
        </div>
      </div>
    );
  }
}
