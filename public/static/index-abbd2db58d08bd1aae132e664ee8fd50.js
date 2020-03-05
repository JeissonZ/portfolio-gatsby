import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Cover from "../components/cover"

const CoverLetter = styled.div`
  color: white;
  margin: auto;
  padding: 1rem;
  background-color: #FF7733;
  width: 95%;
  border: 3px solid #FFC0A0;
  overflow: auto;
  max-width: 700px;
  outline: 7px solid #FF7733;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-columns: 30% 70%;
`
const GridText = styled.div`
    grid-area: 1 / 2 / 1 / 2;
`
const GridButton = styled.div`
    grid-area: 2 / 2 / 2 / 2;
`


export default () => (
    <Layout>
        <CoverLetter>
            <GridContainer>
                <GridText><h3 style={{color:'white', padding:'1rem', margin: 'auto'}}>Hello! I am a software developer with skills in both backend and frontend web technologies. I can design and build web applications and web pages to suit the requirements of your bussiness.</h3></GridText>
                <GridButton><input type="button" value="See More" style={{float:'right', color: 'white', backgroundColor:'transparent', border: '2px solid white', margin:'5px'}}></input></GridButton>
            </GridContainer>
        </CoverLetter>
    </Layout>
)