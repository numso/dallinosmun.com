import cx from 'classnames'
import React from 'react'

export default class Cell extends React.Component {
  static defaultProps = {
    setPaintValue: () => null,
    setCell: () => null
  }

  onMouseDown = e => {
    if (e.nativeEvent.which !== 1) return
    this.props.setPaintValue(!this.props.alive)
    this.props.setCell(this.props.x, this.props.y, !this.props.alive)
  }

  onMouseOver = e => {
    if (e.nativeEvent.which !== 1) return
    this.props.setCell(this.props.x, this.props.y, this.props.paintValue)
  }

  render () {
    const classes = cx('cell', { alive: this.props.alive })
    // const color = this.props.alive ? '#'+Math.floor(Math.random()*16777215).toString(16) : 'white';
    return (
      <span
        onMouseOver={this.onMouseOver}
        onMouseDown={this.onMouseDown}
        className={classes}
      />
    )
  }
}
