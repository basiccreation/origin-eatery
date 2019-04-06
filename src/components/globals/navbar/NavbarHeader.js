import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="Origin Eatery Logo" />
        </Link>
        content from HeaderWrapper
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = `styled.div`
