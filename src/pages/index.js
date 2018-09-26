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
        <p>Student Athlete at Allegheny College majoring in Computer Science, minoring in Economics and Mathematics, and playing varsity Baseball. Upon graduation in May 2019, I am interested in employment opportunities in software development.</p>
    </Layout>
)

export default IndexPage
