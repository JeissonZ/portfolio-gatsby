import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"


const CoverLetter = styled.div`
  color: white;
  margin: auto;
  padding: 1rem;
  background-color: transparent;
  width: 95%;
  border: 3px solid #FFC0A0;
  overflow: auto;
  max-width: 700px;
  outline: 7px solid #FF7733;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 85% 15%;
  grid-template-columns: 30% 70%;
`
const GridText = styled.div`
    grid-area: 1 / 2 / 1 / 2;
`
const GridButton = styled.div`
    grid-area: 2 / 2 / 2 / 2;
`
const GridImg = styled.div`
    grid-area: 1 / 1 / 1 / 1;
    background: linear-gradient( rgba(255, 119, 51, 0.1), rgba(255, 119, 51, 0.9));
   
    
`


export default ({ data }) => (
    <Layout>
        <CoverLetter>
            <GridContainer>
                <GridText><h3 style={{color:'white', padding:'1rem', margin: 'auto'}}>Hello! I am a software developer with skills in both backend and frontend web technologies. I can design and build web applications and web pages to suit the requirements of your bussiness.</h3></GridText>
                <GridButton><input type="button" value="See More" style={{float:'right', color: 'white', backgroundColor:'transparent', border: '2px solid white', margin:'5px'}}></input></GridButton>
                <GridImg><Img style={{zIndex:'-1', position: 'relative'}} fluid={data.file.childImageSharp.fluid} /></GridImg>
            </GridContainer>
        </CoverLetter>
    </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/IMG_1542.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 210) {
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