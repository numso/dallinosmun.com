var React = require('react');

var Header = React.createClass({

  render() {
    return (
      <div className="header">
        <div className="title">Dallin Osmun</div>
        <div className="taglines">
          <div>Web Designer</div>
          <div>Javascript Enthusiast</div>
          <div>Zelda Addict</div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
