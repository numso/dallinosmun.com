import React from 'react'
import ReactDOM from 'react-dom'

import Footer from './components/footer'
import Header from './components/header'
import Main from './main'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('app')
)
