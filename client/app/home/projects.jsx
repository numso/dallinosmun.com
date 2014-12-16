var React = require('react');

var Projects = React.createClass({

  getInitialState() {
    return {
      projects: [
        { name: 'www.osmun.net' },
        { name: 'pictures.dallinosmun.com' },
        { name: 'www.antherion.com' },
        // { name: 'www.lds.org' },
        // { name: 'jerrica.osmun.net' },
        // { name: 'Speedy Shop School Project' },
        // { name: 'www.kuali.co' },
      ]
    };
  },

  renderProject(project) {
    return (
      <div style={{flexGrow: 1, textAlign: 'center'}}>
        <div style={{display: 'inline-block', backgroundColor: 'white', width: 200, height: 200}}>Screenshot goes here</div>
        <div style={{padding: '10px 0'}}>{project.name}</div>
      </div>
    );
  },

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div style={{display:'flex'}}>
          {this.state.projects.map(this.renderProject)}
          <div style={{alignSelf: 'center'}}>(See More...)</div>
        </div>
      </div>
    );
  }

});

module.exports = Projects;
