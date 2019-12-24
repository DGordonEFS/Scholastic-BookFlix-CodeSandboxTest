import * as React from "react";

export default class SideBarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, mouseOver: false };
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseUp() {
    if (this.props.onSelect !== undefined) this.props.onSelect();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selected != state.selected) return { selected: props.selected };

    return null;
  }

  render() {
    var buttonClass = this.state.selected
      ? "EntrySideBarButtonSelected"
      : "EntrySideBarButton";

    var imageClass =
      this.state.mouseOver && !this.state.selected
        ? "EntrySideBarButtonImageOver"
        : "EntrySideBarButtonImage";
    return (
      <div
        className={buttonClass}
        onMouseEnter={() => this.setState({ mouseOver: true })}
        onMouseLeave={() => this.setState({ mouseOver: false })}
        onMouseUp={() => this.onMouseUp()}
      >
        <img className={imageClass} src={this.props.image} />
        <div className="EntrySideBarButtonText">{this.props.text}</div>
      </div>
    );
  }
}
