import React from 'react'
import styled from 'styled-components'

export const EM = styled.span`
  font-weight: bold;
`

export const BR = styled.div`
  height: 30px;
`

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  max-width: 750px;
`

const Heading = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`

export default function AboutMe ({ children }) {
  return (
    <Wrapper>
      <Heading>Who am I?</Heading>
      <p>{children}</p>
    </Wrapper>
  )
}
