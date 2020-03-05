import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import BgWrapper from "./bgwrapper"


const SideNav = styled.div`
    height: 100%; 
    position: fixed;
    z-index: 2; 
    top: 0;
    left: 0;
    background-color: #FF7733; 
    overflow-x: hidden; 
    padding-top: 2rem; 
    transition: 0.5s; 
    ${p => p.open ? css`
      width: 200px;
  ` : css`
      width: 0px;
  `}

`

const SideNavCover = styled.div`
    transition: 0.5s; 
    width:100%;
    height:100%;
    left:0;
    position: fixed;
    top: 0; 
    z-index: 1; 
    display:block;
    ${p => p.open ? css`
      visibility: visible;
      background-color: rgba(0,0,0,0.9);
]     
  ` : css`
      background-color: rgba(0,0,0,0);
      visibility: hidden;
  `}
`
const SideBarItem = styled.li`
    padding: 4px 8px 4px 24px;
    color: #FF7733;
    display: block;
    transition: 0.3s;
    white-space: nowrap;
    
   

`
const SideMenu = styled.ul`
    list-style: none;
`


const LinkSide = props => (
    <SideBarItem>
      <Link to={props.to} style={{color:'#FF7733', padding:'0.5rem', boxShadow:'none', backgroundColor:'#FFC0A0', fontSize:'1.3rem', width:'100%'}} activeStyle={{ backgroundColor: "#FFF0A0"}}>{props.children}</Link>
    </SideBarItem>
  )

  const SideNavbar = props => {
    const {
      isMobileNavFolded,
      onMobileNavToggle,
    } = props
  
    return (
      
      <BgWrapper>
        <SideNavCover onClick={onMobileNavToggle} open={!isMobileNavFolded}></SideNavCover>
        <SideNav onClick={onMobileNavToggle} open={!isMobileNavFolded}>
          <SideMenu>
            <LinkSide to="/">Home</LinkSide>
            <LinkSide to="/projects/">Projects</LinkSide>
            <LinkSide to="/about/">About</LinkSide>
            <LinkSide to="/contact/">Contact</LinkSide>
          </SideMenu>
        </SideNav>
        
      </BgWrapper>
    )
  }
  
  export default SideNavbar