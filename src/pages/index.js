import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <ul className="tabs1">
            <Link to="/"><li className="tabs2"><a className="active" style={{color:"#435777",}} href="">About</a></li></Link>
            <Link to="/page-2/"><li className="tabs2"><a href="">Education</a></li></Link>
            <Link to="/page-3/"><li className="tabs2"><a href="">Experience</a></li></Link>
            <Link to="/page-4/"><li className="tabs2"><a href="">Projects</a></li></Link>
        </ul>
        <h2>About Me</h2>
        <p>Student Athlete at Allegheny College majoring in Computer Science, and minoring in Economics and Mathematics. Playing varsity Baseball at my school. Upon graduation in May 2019, I am interested in employment opportunities in any area of software development. Specific interests lie in big data, data analytics, and distributed computing; have completed projects in these fields and enjoy them a lot. Outside of computer science, I enjoy playing baseball for my college team and going on hikes.</p>
    </Layout>
)

export default IndexPage
