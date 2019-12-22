import * as React from "react";

import HomeScreen from "./home/homescreen";
import "./../styles.css";

export default class BookFlix extends React.Component {
  constructor(props) {
    super(props);
  }

  style = {
    width: 800,
    marginLeft: "auto",
    marginRight: "auto"
  };

  render() {
    return (
      <div className="BookFlix">
        <HomeScreen />
      </div>
    );
  }
}

/*
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-flow: row wrap;
flex-flow: row wrap;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
*/
