import React, { Component } from 'react'
// import './card.css'

export default class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='header'>
          {this.props.header}
        </div>
        <div className='body'>
          {this.props.children}
        </div>
        <style jsx>{`
          .card {
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
            display: inline-block;
            margin: 10px;
            vertical-align: top;
          }

          .header {
            background: #80BD52;
            background: linear-gradient(to bottom, rgb(128,189,81) 0%, rgb(102,168,49) 100%);
            color: white;
            padding: 5px 10px;
          }

          .body {
            background: #2d2d2d;
            padding: 5px 10px;
          }
        `}</style>
      </div>
    )
  }
}
