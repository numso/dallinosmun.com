import React from 'react'

import Footer from './footer'
import Header from './header'

export default function App ({ children, subtitle }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: 'carme', sans-serif;
          margin: 0;
          padding: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #222;
          font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial,
            sans-serif;
          font-style: normal;
          font-weight: 300;
          line-height: 1.4;
          margin-bottom: 0.5rem;
          margin-top: 0.2rem;
          text-rendering: optimizeLegibility;
        }

        h1 {
          font-size: 2.75rem;
        }

        h2 {
          border-bottom: 2px solid;
          display: inline-block;
          font-size: 20px;
          font-weight: 400;
          padding: 3px 10px;
        }

        ul,
        p {
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        a {
          color: #1313fd;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
