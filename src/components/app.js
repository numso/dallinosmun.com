import React from 'react'

import Footer from './footer'
import Header from './header'

export default function App ({ children, subtitle }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
