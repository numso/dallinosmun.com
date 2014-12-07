var React = window.React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute} = Router;
require('zurb-foundation-npm/css/foundation.min');
require('./style');

var routes = (
  <Route path="/" handler={require('./wrapper')}>
    <DefaultRoute handler={require('./home')}/>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.body);
});
