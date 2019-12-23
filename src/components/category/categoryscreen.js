import * as React from "react";
import { Redirect } from "react-router-dom";

import TopBar from "./../topbar/topbar";
import Book from "./book";

import "./../../css/category.css";

export default class CategoryScreen extends React.Component {
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

    var category = this.props.data[params.id];

    document.body.style.backgroundImage = "url(" + category.background + ")";

    var onSelect = this.onSelect;

    var books = category.books.map(function(book, index) {
      return <Book key={index} book={book} onSelect={() => onSelect(index)} />;
    });

    return (
      <div className="BookFlix">
        <link
          rel="stylesheet"
          type="text/css"
          href={"./../../css/category.css"}
        />
        <div className="Category">
          <TopBar home={true} onIconClick={() => this.onIconClick()} />
          <div className="CategoryTitleBar">
            <div className="CategoryTitleText">
              {category.title}
              <div className="CategoryTitleSubText">{category.subtitle}</div>
            </div>
          </div>
          <div />
          <div className="CategoryBooks">{books}</div>
        </div>
      </div>
    );
  }
}
