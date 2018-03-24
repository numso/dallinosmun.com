import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 119px);
  flex-direction: column;
`

const Header = styled.div`
  font-size: 300px;
`

const Subheader = styled.div`
  font-size: 100px;
`

export default function NotFound () {
  return (
    <Wrapper>
      <Header>404</Header>
      <Subheader>Not Found</Subheader>
    </Wrapper>
  )
}
