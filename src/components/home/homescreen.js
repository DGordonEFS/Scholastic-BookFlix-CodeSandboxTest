import * as React from "react";

import TopBar from "./../topbar/topbar";
import FeaturedPair from "./featuredpair";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <TopBar />
        <div className="HomeTitleBar">
          <div className="HomeTitleText">
            Explore the world of reading!
            <div className="HomeTitleSubText">
              Pick a category to find your next story.
            </div>
          </div>
          <FeaturedPair />
        </div>
      </div>
    );
  }
}
