import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/app'
import Main from './main'
import Projects from './projects'
import NotFound from './not-found'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/projects' component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('app')
)
