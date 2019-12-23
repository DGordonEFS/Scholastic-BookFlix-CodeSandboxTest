import * as React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomeBook">
        <img className="HomeBookImage" src={this.props.book.image} />
        <div className="HomeBookText">{this.props.book.text}</div>
      </div>
    );
  }
}
