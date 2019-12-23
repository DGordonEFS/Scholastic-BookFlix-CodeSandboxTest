import * as React from "react";
import { Redirect } from "react-router-dom";

import TopBar from "./../topbar/topbar";
import FeaturedPair from "./featuredpair";

import Book from "./book";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: -1 };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(index) {
    this.setState({ selected: index });
  }

  render() {
    document.body.style.backgroundImage =
      "url(https://da-content.digital.scholastic.com/bfx/prod/assets/img/backgrounds/home.jpg)";
    if (this.state.selected > -1) {
      var category =
        "/category/" + this.props.books[this.state.selected].category;

      return <Redirect to={category} push={true} />;
    }

    var onSelect = this.onSelect;

    var books = this.props.books.map(function(book, index) {
      return <Book key={index} book={book} onSelect={() => onSelect(index)} />;
    });

    return (
      <div className="BookFlix">
        <link rel="stylesheet" type="text/css" href={"./../,./css/home.css"} />
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
          <div className="HomeBooks">{books}</div>
        </div>
      </div>
    );
  }
}
