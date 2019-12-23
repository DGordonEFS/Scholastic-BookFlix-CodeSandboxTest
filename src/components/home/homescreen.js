import * as React from "react";

import TopBar from "./../topbar/topbar";
import FeaturedPair from "./featuredpair";

import Book from "./book";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(index) {}

  render() {
    var books = this.props.books.map(function(book, index) {
      return <Book key={index} book={book} onSelect={() => onSelect(index)} />;
    });

    return (
      <div className="BookFlix">
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
