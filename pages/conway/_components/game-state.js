const listeners = []

let state, _width, _height, _id

export function start () {
  _id = window.requestAnimationFrame(start)
  step()
}

export function stop () {
  window.cancelAnimationFrame(_id)
}

export function init (width, height, shouldUpdate) {
  _width = width
  _height = height
  state = []
  for (let x = 0; x < height; ++x) {
    const cells = []
    for (let y = 0; y < width; ++y) {
      const alive = shouldUpdate ? Math.random() > 0.7 : 0
      cells.push(alive)
    }
    state.push(cells)
  }
  if (shouldUpdate) changed()
}

export function clear (width, height) {
  _width = width
  _height = height
  state = []
  for (let x = 0; x < height; ++x) {
    const cells = []
    for (let y = 0; y < width; ++y) {
      cells.push(false)
    }
    state.push(cells)
  }
  changed()
}

export function step () {
  const newState = []
  for (let x = 0; x < _height; ++x) {
    const row = []
    for (let y = 0; y < _width; ++y) {
      row.push(nextStep(x, y))
    }
    newState.push(row)
  }
  state = newState
  changed()
}

export function pastePattern (pattern) {
  for (let x = 0; x < pattern.length; ++x) {
    for (let y = 0; y < pattern[x].length; ++y) {
      state[x][y] = pattern[x][y]
    }
  }
  changed()
}

export function setCell (x, y, alive) {
  state[x][y] = alive
  changed()
}

export function getState () {
  return state
}

export function onChange (cb) {
  listeners.push(cb)
}

function changed () {
  listeners.forEach(cb => cb())
}

function nextStep (x, y) {
  let numAlive = 0
  for (let xOffset = -1; xOffset <= 1; ++xOffset) {
    for (let yOffset = -1; yOffset <= 1; ++yOffset) {
      if (xOffset === 0 && yOffset === 0) continue
      let _x = x + xOffset
      if (_x < 0) _x = _height - 1
      if (_x >= _height) _x = 0
      let _y = y + yOffset
      if (_y < 0) _y = _width - 1
      if (_y >= _width) _y = 0
      numAlive += state[_x][_y] ? 1 : 0
    }
  }
  if (!state[x][y]) return numAlive === 3
  if (numAlive < 2) return false
  if (numAlive < 4) return true
  return false
}
