import React from "react"
export default ({ children }) => (
  <div style={{ zIndex: 1, margin: `0 auto`, height: '100%', width: '100%', padding: `0 1rem`,backgroundColor: '#4CAF50' }}>
    {children}
  </div>
)