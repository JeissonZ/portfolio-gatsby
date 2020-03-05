import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import HeaderMenu from "../components/header-menu"
import bgWrapper from "../components/bgwrapper"
import { StaticQuery } from "gatsby"

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 75% 15% 10%;
  grid-template-columns: 36% 64%;
  background-color:transparent;
`
const GridText = styled.div`
    grid-area: 1 / 2/ 3 / 2;
    background-color:black;
`
const GridImg = styled.div`
    grid-area: 1 / 1 / 3 / 1;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
`
const GridHeader = styled.div`
    grid-area: 3 / 1 / 3 / 3;
`



  
export default ({ data }) => ( 
    <div>
        <bgWrapper>
            <GridContainer>
                <GridText><div style={{position: 'relative', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)'}}><h3 style={{color:'#FFC0A0', padding:'1rem', margin: '0'}}>Hello! I am a software developer with skills in both backend and frontend web technologies. I can design and build web applications and web pages to suit the requirements of your bussiness.</h3>
                <input type="button" value="See More" style={{color: '#FFC0A0', backgroundColor:'transparent', border: '2px solid #FFC0A0', margin:'15px'}}></input></div></GridText> 
                <GridImg><Img style={{zIndex:'-1', position: 'relative'}} fluid={data.file.childImageSharp.fluid} /></GridImg>
                <GridHeader><HeaderMenu></HeaderMenu></GridHeader>
            </GridContainer>
        </bgWrapper>
        <div style={{backgroundColor: 'white', padding: '15px'}}>
            <h3>Why to have web presence?</h3>
        </div>
    </div>
)


export const query = graphql`
  query {
    file(relativePath: { eq: "images/IMG_1542.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1512) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            aspectRatio 
            src 
            srcSet 
            sizes
            ...GatsbyImageSharpFluid_noBase64
          }
      }
    }
  }
`


