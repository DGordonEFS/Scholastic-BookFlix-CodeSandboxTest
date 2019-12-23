import * as React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CategoryBook">
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
