import * as React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    if (this.props.onSelect !== undefined) this.props.onSelect();
  }

  render() {
    return (
      <div className="CategoryBook" onMouseUp={() => this.onSelect()}>
        <div className="CategoryBookContents">
          <img
            className="CategoryBookLogo"
            src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/weston-woods-color.png"
          />
          <div className="CategoryBookImageContents">
            <img
              className="CategoryBookImageLeft"
              src={this.props.book.book1}
            />

            <img
              className="CategoryBookImageRight"
              src={this.props.book.book2}
            />
          </div>
        </div>
      </div>
    );
  }
}
