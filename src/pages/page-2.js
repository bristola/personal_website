import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <ul className="tabs1">
            <Link to="/"><li className="tabs2"><a href="">About</a></li></Link>
            <Link to="/page-2/"><li className="tabs2"><a className="active" style={{color:"#435777",}} href="">Education</a></li></Link>
            <Link to="/page-3/"><li className="tabs2"><a href="">Experience</a></li></Link>
            <Link to="/page-4/"><li className="tabs2"><a href="">Projects</a></li></Link>
        </ul>
        <h2>College and Highschool</h2>
        <p>
            <ul style={{textAlign:"left"}}>
                <li style={{}}>
                    <b>Allegheny College (2015-2019)</b>
                    <ul style={{textAlign:"left"}}>
                        <li>Computer Scince Major</li>
                        <li>Mathematics and Economics Minors</li>
                        <li>Cumulative GPA: 3.8</li>
                        <li>Distinguished Alden Scholar (Dean’s List) for high academic achievement</li>
                        <li>North Coast Athletic Conference Academic Honor Roll</li>
                        <li>Varsity Baseball</li>
                    </ul>
                </li>
            </ul>
            <ul style={{textAlign:"left"}}>
                <li style={{}}>
                    <b>Orchard Park Highschool (2011-2015   )</b>
                    <ul style={{textAlign:"left"}}>
                        <li>Regents Diploma</li>
                        <li>Cumulative GPA: 96%</li>
                        <li>National Honor Society</li>
                        <li>Spanish Honor Society</li>
                        <li>Varsity Baseball</li>
                    </ul>
                </li>
            </ul>
        </p>
    </Layout>
)

export default IndexPage
