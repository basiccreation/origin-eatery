import React from "react"
import styled from "styled-components"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 68px);
  background: url(${props => props.img});
` //here's a tick

export { HomeHeader }
