import React from 'react'
import profile_pic from "../images/image1.png"
import twitter from "../images/twitter.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import { Link } from 'gatsby'

const Header = () => (
  <div
    style={{
      background: '#435777',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Austin Bristol
        </Link>
      </h1>
      <h3>bristola@allegheny.edu</h3>
      <img src={profile_pic} alt="Profile Picture"
        style={{
            marginBottom: '10px',
        }}/>
      <div className="socials" style={{
      }}>
      <a href="https://www.linkedin.com/in/austinbristol/"><img className="socialIMG" src={linkedin} alt="LinkedIn"/></a>
      <a href="https://github.com/bristola"><img className="socialIMG" src={github} alt="GitHub"/></a>
      <a href="https://twitter.com/bristola64"><img className="socialIMG" src={twitter} alt="Twitter"/></a>
      </div>
    </div>
  </div>
)

export default Header
