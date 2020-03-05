import React, { PureComponent, useRef } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import SideNav from './SideNavbar'

const breakpoints = [600, 768, 992, 1200]

// const mq = breakpoints.map(
//   bp => css`@media (min-width: ${bp}px)`
// )

const TopContainer = styled.div`
  margin: auto;
  padding: 1rem;
  background-color: #FF7733;
  width:100%;
  height:100%;
  
`
const MenuItem = styled.li`
    display: none;
    margin-right: 1rem;
    max-width: 600px;
    padding: 0.1rem;
    @media (min-width: 601px) {
        display: inline;
      }
`
const MenuItemResp = styled.li`
    display: none;
    margin-right: 1rem;
    padding: 0.5rem;
    @media (max-width: 600px) {
        display: inline;
    }
    cursor: pointer;
    color: #FF7733;
    background-color: #FFC0A0;
`
const Menu = styled.ul`
    list-style: none;
    float: right;
`
const PageName = styled.h3`
    display: inline;
    color: #FFF0A0;
`


const ListLink = props => (
  <MenuItem>
    <Link to={props.to} style={{ color:'#FF7733', boxShadow:'none', backgroundColor:'#FFC0A0', padding:'0.5rem'}} activeStyle={{ backgroundColor: "#FFF0A0"}}>{props.children}</Link>
  </MenuItem>
)


class HeaderMenu extends PureComponent {
    state = {
      isMobileNavFolded: true,
    }
  
    toggleMobileNav = () => {
      this.setState(prevState => ({
        isMobileNavFolded: !prevState.isMobileNavFolded,
      }))
    }
  
    onRouteChange = () => {
      this.setState({
        isMobileNavFolded: true,
      })
    }
  
    render() {
      const { isMobileNavFolded } = this.state
      
      return (
        <TopContainer id='header'>    
            <header >
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, boxShadow:'none'}}>
                    <PageName>Jeisson Zambrano</PageName>
                </Link>
                <Menu>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/projects/">Projects</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                    <MenuItemResp onClick={this.toggleMobileNav}>Menu</MenuItemResp>
                </Menu>
                <SideNav
                    isMobileNavFolded={isMobileNavFolded}
                    onMobileNavToggle={this.toggleMobileNav}
                />
                {this.props.children}
            </header>
        </TopContainer>
      )
    }
  }
  
  export default HeaderMenu
  

