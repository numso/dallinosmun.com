import { keyframes } from 'styled-components'

export const slide = (start, isAbsolute) =>
  isAbsolute ? slideIn(start) : relativeSlideIn(start)

const slideIn = start => keyframes`
  from {
    top: ${start};
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
`

const relativeSlideIn = start => keyframes`
  from {
    position: relative;
    top: ${start};
    opacity: 0;
  }

  to {
    position: relative;
    top: 0;
    opacity: 1;
  }
`
