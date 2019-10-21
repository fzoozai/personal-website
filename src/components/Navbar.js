import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        fontFamily: 'monospace',
        fontSize: '30px'
      }}
    >

      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </p>
    </div>
  </div>
)

export default Navbar
