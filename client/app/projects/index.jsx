var React = require('react');

var Projects = React.createClass({

  getInitialState() {
    return {
      projects: [
        { name: 'Osmun Family Site',      url: 'http://www.osmun.net',            img: 'img/osmun-thumb.jpg'     },
        { name: 'Dynamic Visualizations', url: 'http://pictures.dallinosmun.com', img: 'img/pictures-thumb.png'  },
        { name: 'Antherion Games',        url: 'http://www.antherion.com',        img: 'img/antherion-thumb.png' },
        { name: 'www.lds.org' },
        { name: 'jerrica.osmun.net' },
        { name: 'Speedy Shop School Project' },
        { name: 'www.kuali.co' },
      ]
    };
  },
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <p>TODO:: Find fancy way to layout and explain these projects</p>
        <ul>{this.state.projects.map((p)=>(<li>{p.name}</li>))}</ul>
      </div>
    );
  }

});

module.exports = Projects;
