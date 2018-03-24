import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding: 20px 50px;
`

export default function Footer () {
  const year = new Date().getFullYear()
  return (
    <Wrapper>
      Site designed and coded by Dallin Osmun{' '}
      <span style={{ fontFamily: 'sans-serif' }}>©</span> {year}
    </Wrapper>
  )
}
