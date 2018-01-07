import { map, range } from 'lodash'

const parse = str => {
  const lines = str.split('\n').slice(1)
  lines.pop()
  return map(range(9), x => map(range(36), y => (lines[x][y] === 'x' ? 1 : 0)))
}

// const random = () =>
//   map(range(9), () => map(range(36), () => Math.random() > 0.7))

const gunner = parse(
  `
                        x
                      x x
            xx      xx            xx
           x   x    xx            xx
xx        x     x   xx
xx        x   x xx    x x
          x     x       x
           x   x
            xx
`
)

const gliders = parse(
  `
                               x
                                x
                              xxx
    x             x
     x             x
   xxx           xxx        x
                             x
                           xxx

`
)

// export default [gunner, gliders, random()]
export default [gunner, gliders]
