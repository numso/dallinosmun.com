var React = require('react');
var {RouteHandler} = require('react-router');
var Navigation = require('./navigation');

var Wrapper = React.createClass({

  render() {
    return (
      <div>
        <Navigation/>
        <RouteHandler/>
      </div>
    );
  }

});

module.exports = Wrapper;
