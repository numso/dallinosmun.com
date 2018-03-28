import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Main from './main'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={Main} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)
