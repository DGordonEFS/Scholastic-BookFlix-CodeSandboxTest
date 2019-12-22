import * as React from "react";

export default class FeaturedPair extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomeTitleFeaturedPair">
        <img
          className="HomeTitleFeaturedPairLogo"
          src="https://da-content.digital.scholastic.com/bfx/prod/assets/img/weston-woods-color.png"
        />
        <div className="HomeTitleFeaturedPairContent">
          <img
            className="HomeTitleFeaturedPairItemLeft"
            src="https://da-content.digital.scholastic.com/bfx/prod/pairs/bk0042pr/bk0042sce.jpg"
          />

          <img
            className="HomeTitleFeaturedPairItemRight"
            src="https://da-content.digital.scholastic.com/bfx/prod/pairs/bk0042pr/bk0042bce.jpg"
          />
        </div>
      </div>
    );
  }
}
