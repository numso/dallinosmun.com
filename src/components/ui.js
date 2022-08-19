import React from 'react'
import styled from 'styled-components'

export function Link ({ internal, ...props }) {
  if (internal) return <A {...props} />
  return (
    <A
      {...props}
      target='_blank'
      rel='noreferrer noopener'
      onClick={e => e.stopPropagation()}
    />
  )
}

export function Letter ({ children, title }) {
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export const Em = styled.span`
  font-weight: bold;
`

export const Br = styled.div`
  height: 30px;
`

const A = styled.a`
  color: #61a0ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  max-width: 750px;
`

const Heading = styled.h1`
  color: #222;
  font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  font-size: 2.75rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 20px;
  margin-top: 0.2rem;
  text-align: center;
`

const Text = styled.div`
  line-height: 1.6;
  margin-bottom: 1.25rem;
`
