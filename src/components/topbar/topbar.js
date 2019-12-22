import * as React from "react";
import "./../../styles.css";

import TitleSearch from "./titlesearch";

export default class TopScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TopBar">
        <img
          className="TopBarIcon"
          src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/BookFlix_logo_Final_R.png"
        />
        <TitleSearch />
      </div>
    );
  }
}
