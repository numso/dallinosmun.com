var React = require('react');
var _ = require('lodash');

var Skills = React.createClass({

  getInitialState() {
    return {
      'Skills Set': [
        'Web Design',
        'Responsive Design',
        'Server Side Coding',
        'Knowledgable in RESTful API',
        'Client Side Mashup',
        'Good at Team Management'
      ],
      'Programming Knowledge': [
        'HTML5',
        'CSS3, Stylus, LESS',
        'Javascript, ES6',
        'Angular, React, Backbone',
        'Express, Koa',
        'Socket.io'
      ],
      'Specialties': [
        'NodeJS Servers',
        'Javascript with Client Side Mashup',
        'CSS3 including transitions and animations',
        'Responsive Design for mobile devices'
      ]
    };
  },

  renderList(items, title) {
    return (
      <div>
        <div style={{textAlign:'center'}}><div className="title">{title}</div></div>
        <ul>{items.map((i)=>(<li>{i}</li>))}</ul>
      </div>
    );
  },

  render() {
    return (
      <div className="skills">
        {_.map(this.state, this.renderList)}
      </div>
    );
  }

});

module.exports = Skills;
