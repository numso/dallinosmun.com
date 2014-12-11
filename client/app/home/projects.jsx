var React = require('react');

var Projects = React.createClass({

  getInitialState() {
    return {
      projects: [
        { name: 'www.osmun.net' },
        { name: 'www.lds.org' },
        { name: 'jerrica.osmun.net' },
        { name: 'www.antherion.com' },
        { name: 'Speedy Shop School Project' },
        { name: 'pictures.dallinosmun.com' },
        { name: 'www.kuali.co' },
      ]
    };
  },

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <p>Figure out how I want to display what I've worked on with these various projects. Do I want to show WIP?</p>
        <ul>
          {this.state.projects.map((i)=>(<li>{i.name}</li>))}
        </ul>
      </div>
    );
  }

});

module.exports = Projects;
