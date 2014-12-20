var React = require('react');

var Projects = React.createClass({

  getInitialState() {
    return {
      projects: [
        { name: 'Osmun Family Site',      url: 'http://www.osmun.net',            img: 'img/osmun-thumb.jpg'     },
        { name: 'Dynamic Visualizations', url: 'http://pictures.dallinosmun.com', img: 'img/pictures-thumb.png'  },
        { name: 'Antherion Games',        url: 'http://www.antherion.com',        img: 'img/antherion-thumb.png' }
      ]
    };
  },

  renderProject(project) {
    return (
      <div style={{flexGrow: 1, textAlign: 'center'}}>
        <a href={project.url} target="_blank">
          <img style={{boxShadow:'0 0 20px 2px rgba(0,0,0,.5)'}} src={project.img}/>
          <div style={{padding: '10px 0', color: 'black'}}>{project.name}</div>
        </a>
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
