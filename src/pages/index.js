import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import HeaderMenu from "../components/header-menu"
import StickyHeader from "../components/sticky-header"
import BgWrapper from "../components/bgwrapper"
import scrollTo from 'gatsby-plugin-smoothscroll'


const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 75% 25%;
  grid-template-columns: 45% 55%;
  background-color:transparent;
`
const GridText = styled.div`
    grid-area: 1 / 2/ 3 / 2;
    background-color:black;
    z-index:1;
`
const GridImg = styled.div`
    grid-area: 1 / 1 / 3 / 1;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`

const TextContent = styled.div`
    margin:auto;
    padding:5px;
    
`

const Parag = styled.p`
    text-indent: 2em;
`

// class ScrollButton extends React.Component {
//     // This syntax ensures `this` is bound within handleClick.
//     // Warning: this is *experimental* syntax.
//     handleClick = () => {
//       console.log('this is:', this);
     
//     //   window.scrollTo(0, myRef.current.offsetTop);
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick} style={{ cursor: 'pointer', color: '#FFC0A0', backgroundColor:'black', border: '2px solid #FFC0A0', marginBottom:'10px', marginLeft:'15px'}} >
//           See More
//         </button>
//       );
//     }
//   }

  
  
export default ({ data }) => ( 
    <div style={{scrollBehavior: 'smooth'}}>
        <BgWrapper>
            <GridContainer>
                <GridText><div style={{position: 'relative', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)'}}><h3 style={{color:'#FFC0A0', padding:'1rem', margin: '0'}}>Hello! I am a software developer with skills in both backend and frontend web technologies. I can design and build web applications and web pages to suit the requirements of your bussiness.</h3>
                <button onClick={() => scrollTo('#header')} style={{ cursor: 'pointer', color: '#FFC0A0', backgroundColor:'black', border: '2px solid #FFC0A0', marginBottom:'10px', marginLeft:'15px'}}>See More</button> </div></GridText> 
                <GridImg><Img style={{zIndex:'-1', position: 'relative', backgroundColor:'black'}} fluid={data.file.childImageSharp.fluid} /></GridImg>
                
            </GridContainer>
        </BgWrapper>
        <StickyHeader/>
        <div id = "MainBody" style={{backgroundColor: 'white', padding: '15px'}}>
            
            <TextContent><h3>Why to have web presence?</h3>
                <Parag> The Internet offers to bussiness of any size a unique opportunity to connect with a new pool of customers,
                    extending their reach organically.
                </Parag>
            </TextContent>
            <TextContent><h3>Web's potential</h3>
                <Parag> In the next section you will find three different kind of projects that could offer some insight about
                    what the web can do for you and your bussiness.
                </Parag>
                <ol style={{listStyleType: 'upper-roman'}}>
                    <h4><li>Bussiness/Personal Showcase</li></h4>
                       <Parag> Do you have a unique skill or a professional service to offer? Then this is the kind of web page 
                           that will work for you.
                           <br></br>
                           <br></br>
                           Average Budget: $400
                       </Parag> 
                    <h4><li>Online Store</li></h4>
                        <Parag> This one works just like a physical store. The main feature is that your customers can know your 
                            products better or even buy them directly without going to your store. This is huge! You may not even 
                            need a physical store to begin with. 
                            <br></br>
                            <br></br>
                            Average Budget: $400 - $1500 (Depends on the capabilities of your application)
                        </Parag>
                    <h4><li>Web Application</li></h4>
                        <Parag> This is the most powerful implementation in the Web. It uses the magic of cloud computing to execute
                            all sorts of tasks automatically. Big sites like Facebook, Instagram and Youtube are in fact web apps.
                            <br></br>
                            With a web application you can implement almost any service you can imagine, delivered through the Internet.
                            <br></br>
                            <br></br>
                            Average Budget: (Depends on the requirements of the project)
                        </Parag>
                </ol>
            </TextContent>
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
