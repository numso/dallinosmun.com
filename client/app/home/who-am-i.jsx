var React = require('react');

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var WhoAmI = React.createClass({

  getInitialState() {
    var books = ['Wheel of Time', 'Ender\'s Game', 'Myst', 'Stormlight Archive', 'Mistborn', 'Reckoners'];
    var shows = ['Once upon a Time', 'The 100', 'Chuck', 'Big Bang Theory', 'The Flash', 'The Arrow', 'Firefly'];
    var games = ['Zelda', 'Minecraft', 'Starcraft', 'Starcraft II', 'Super Smash Brothers'];
    var state = {
      book: getRandom(books),
      show: getRandom(shows),
      games: [getRandom(games)]
    };
    var game2 = getRandom(games);
    while (game2 === state.games[0]) game2 = getRandom(games);
    state.games.push(game2);
    return state;
  },

  render() {
    return (
      <div className="who-am-i">
        <h1>Who am I?</h1>
        <p>Hi, My name's Dallin Osmun and I'm a web developer. I graduated from Utah State University and am now working for an awesome group called KualiCo. I enjoy reading the {this.state.book} series and watching {this.state.show} with my friends. In my spare time you'll probably find me playing {this.state.games[0]} or {this.state.games[1]} (if I'm not coding, that is). I love life and I'm a Mormon. Oh, and I make dang good Italian food.</p>
      </div>
    );
  }

});

module.exports = WhoAmI;
