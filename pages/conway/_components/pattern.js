import React from 'react'

import Row from './row'
import Cell from './cell'

export default function Pattern ({ cells, onClick }) {
  return (
    <div className='grid' style={{ marginBottom: 20 }} onClick={onClick}>
      {cells.map((row, x) => (
        <Row key={`row-${x}`}>
          {row.map((cell, y) => (
            <Cell key={`cell-${x}-${y}`} x={x} y={y} alive={cell} />
          ))}
        </Row>
      ))}
    </div>
  )
}
