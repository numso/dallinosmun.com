var React = require('react');

var Navigation = React.createClass({

  getInitialState() {
    return {
      items: [
        { name: 'Home',            link: '#' },
        { name: 'Portfolio',       link: '#' },
        { name: 'School Projects', link: '#' },
        { name: 'Code Snippets',   link: '#' },
        { name: 'Contact Me',      link: '#' }
      ]
    };
  },

  render() {
    return (
      <nav className="top-bar" role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#">Dallin Osmun</a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section className="top-bar-section">
          <ul className="right">
            {this.state.items.map((item)=>(<li><a href={item.link}>{item.name}</a></li>))}
          </ul>
        </section>
      </nav>
    );
  }

});

module.exports = Navigation;
