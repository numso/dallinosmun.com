var React = require('react');

var Footer = React.createClass({

  render() {
    var year = (new Date()).getFullYear();
    return (
      <div style={{backgroundColor:'black', color:'white', padding: '20px 50px'}}>Site designed and coded by Dallin Osmun <span style={{fontFamily:'sans-serif'}}>©</span> {year}</div>
    );
  }

});

module.exports = Footer;
