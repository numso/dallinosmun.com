var React = require('react');
var Header = require('./header');
var WhoAmI = require('./who-am-i');
var Skills = require('./skills');
var Projects = require('./projects');

var Home = React.createClass({

  render() {
    return (
      <div>
        <div className="header-box-container">
          <Row className="header-box">
            <Header/>
          </Row>
        </div>
        <Row className="info-box">
          <WhoAmI/>
          <Skills/>
        </Row>
        <Row className="projects-box">
          <Projects/>
        </Row>
      </div>
    );
  }

});

module.exports = Home;

var Row = React.createClass({
  getDefaultProps() {
    return {
      className: ''
    };
  },
  render() {
    return (
      <div className={this.props.className}>
        <div className="row">
          <div className="small-12 column">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
