import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"


const Wrapper = styled("div")`
  
  position: relative;
`
export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
          transition: 0.5s;
          background-color: black;
        }
      `}
    />
    {children}
  </Wrapper>
)