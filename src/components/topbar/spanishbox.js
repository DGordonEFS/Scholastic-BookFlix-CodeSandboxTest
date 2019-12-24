import * as React from "react";

export default class SpanishBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false };
    this.onMouseUp = this.onMouseUp.bind(this);
    this.getDisplay = this.getDisplay.bind(this);
  }

  getDisplay() {
    return this.props.visible ? "initial" : "none";
  }

  onMouseUp() {
    this.setState({ enabled: !this.state.enabled });
  }

  render() {
    var thumbBorderClass = this.state.enabled
      ? "TopBarSpanishBoxSliderChecked"
      : "TopBarSpanishBoxSlider";

    var thumbClass = this.state.enabled
      ? "TopBarSpanishBoxSliderThumbChecked"
      : "TopBarSpanishBoxSliderThumb";
    return (
      <div style={{ display: this.getDisplay() }}>
        <div className="TopBarSpanishBox" onMouseUp={() => this.onMouseUp()}>
          <div className={thumbBorderClass}>
            <div className={thumbClass} />
          </div>
          <div className="TopBarSpanishBoxText">Español</div>
        </div>
      </div>
    );
  }
}
