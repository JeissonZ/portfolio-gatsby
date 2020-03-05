import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const MenuItem = styled.li`
  display: inline;
  margin-right: 1rem;
  max-width: 600px;
  padding: 0.1rem;
`

const Menu = styled.ul`
  list-style: none;
  float: right;
`
const PageName = styled.h3`
  display: inline;
  color: #FFF0A0;
`


const MainContainer = styled.div`
  margin: auto;
`

const TopContainer = styled.div`
  margin: auto;
  padding: 1rem;
  background-color: #FF7733;
`

const ContentContainer = styled.div`
  margin: 3rem 0;
  padding: 0 1rem;
`
const FooterContainer = styled.div`
  margin: 3rem 0;
  padding: 1rem;
  background-color: #CF3200;
`



const ListLink = props => (
  <MenuItem>
    <Link to={props.to} style={{ color:'#FF7733', boxShadow:'none', backgroundColor:'#FFC0A0', padding:'0.5rem'}} activeStyle={{ backgroundColor: "#FFF0A0"}}>{props.children}</Link>
  </MenuItem>
)
export default ({ children }) => (
  <MainContainer>
    
    <TopContainer>
      <header >
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, boxShadow:'none'}}>
          <PageName>Jeisson Zambrano</PageName>
        </Link>
        <Menu>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </Menu>
      </header>
    </TopContainer>

    <ContentContainer>
      {children}
    </ContentContainer>

    <FooterContainer>
      <PageName>My Footer</PageName>
    </FooterContainer>
  </MainContainer>
)