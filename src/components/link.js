import omit from 'lodash.omit'
import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  color: #61a0ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
export default function SafeOutgoingLink (props) {
  const rest = omit(props, 'internal')
  if (props.internal) return <A {...rest} />
  return (
    <A
      {...rest}
      target='_blank'
      rel='noreferrer noopener'
      onClick={e => e.stopPropagation()}
    />
  )
}
