var React = require('react');
var {RouteHandler} = require('react-router');
var Navigation = require('./navigation');
var Footer = require('./footer');

var Wrapper = React.createClass({

  render() {
    return (
      <div>
        <Navigation/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }

});

module.exports = Wrapper;
