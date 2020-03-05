import React, { PureComponent } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import HeaderMenu from './header-menu'

const TopContainer = styled.div`
  margin: auto;
  width:100%;
  height:65px;
  ${p => p.stick ? css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
  ` : css`
    position: relative;
    
  `}
`

class StickyHeader extends PureComponent {
    state = {
      isSticky: false,
    }

    inputRef = null
    originalPos = 0
    
    handleScroll = () => {  
        this.setState({
            isSticky: window.pageYOffset >= this.originalPos ,
         })
    }

    handleResize = () =>{
        this.originalPos = this.inputRef.getBoundingClientRect().top + window.pageYOffset
        console.log('resizing')
    }
   
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
        this.originalPos = this.inputRef.getBoundingClientRect().top + window.pageYOffset
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    }
  
    
    render() {
     
      const { isSticky } = this.state
      
      return (
        <TopContainer id='header' ref={inputRef => { this.inputRef = inputRef }} stick={isSticky}>    
            <HeaderMenu/>
        </TopContainer>
      )
    }
  }
  
  export default StickyHeader
  