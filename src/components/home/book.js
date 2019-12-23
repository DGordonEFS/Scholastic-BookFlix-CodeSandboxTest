import * as React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    this.props.onSelect();
  }

  render() {
    return (
      <div className="HomeBook" onMouseUp={() => this.onSelect()}>
        <img className="HomeBookImage" src={this.props.book.image} />
        <div className="HomeBookText">{this.props.book.text}</div>
      </div>
    );
  }
}
