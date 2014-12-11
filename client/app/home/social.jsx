var React = require('react');

var Social = React.createClass({

  getInitialState() {
    return {
      links: [
        { link: 'http://www.twitter.com/dallinosmun',                   img: 'img/twitter.png'  },
        { link: 'http://www.facebook.com/Veovis',                       img: 'img/facebook.png' },
        { link: 'http://www.linkedin.com/profile/view?id=42336136',     img: 'img/linkedin.png' },
        { link: 'http://plus.google.com/118106587848547452215?prsrc=3', img: 'img/gplus.png'    }
      ]
    };
  },

  render() {
    return (
      <div>
        <h1>Links</h1>
        <div>
          {this.state.links.map((l)=>(
            <a href={l.link} target="_blank">
              <img src={l.img} style={{width:50}}/>
            </a>
          ))}
        </div>
      </div>
    );
  }

});

module.exports = Social;
