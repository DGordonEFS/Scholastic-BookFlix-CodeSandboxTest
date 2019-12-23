import * as React from "react";

export default class TitleSearch extends React.Component {
  render() {
    return (
      <div className="TopBarTitleSearch">
        <input
          className="TopBarTitleSearchInput"
          placeholder="Title Search"
          type="text"
          name="lname"
        />
        <input className="TopBarTitleSearchButton" type="submit" value="" />
      </div>
    );
  }
}
