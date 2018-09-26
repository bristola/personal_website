import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <ul className="tabs1">
            <Link to="/"><li className="tabs2"><a href="">About</a></li></Link>
            <Link to="/page-2/"><li className="tabs2"><a href="">Education</a></li></Link>
            <Link to="/page-3/"><li className="tabs2"><a className="active" style={{color:"#435777",}} href="">Experience</a></li></Link>
            <Link to="/page-4/"><li className="tabs2"><a href="">Projects</a></li></Link>
        </ul>
        <h2>Work Experience</h2>
        <p>
            <ul style={{textAlign:"left"}}>
                <li style={{}}>
                    <b>Enterprise Information Management Intern</b>
                    <p style={{textAlign:"left",paddingBottom: "0",}}><u>BlueCross BlueShield of Western New York</u></p>
                    <ul style={{textAlign:"left"}}>
                        <li>May 2018 - August 2018</li>
                        <li>Developed automated reports of database and MDM systems.</li>
                        <li>Analyzed and created ETL to integrate data from multiple sources.</li>
                        <li>Gained experience in SQL, Cognos, Informatica, and Database Systems.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Software Engineer Intern</b>
                    <p style={{textAlign:"left",paddingBottom: "0",}}><u>Trove Predictive Data Science</u></p>
                    <ul style={{textAlign:"left"}}>
                        <li>June 2017 - August 2017</li>
                        <li>Worked on automatic database updating system.</li>
                        <li>Implemented module to update database table structure and metadata information based on excel spreadsheets.</li>
                        <li>Gained experience with Java programming, Spring framework, database systems, and object oriented methodologies.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Programming Intern</b>
                    <p style={{textAlign:"left",paddingBottom: "0",}}><u>Shatter I.T.</u></p>
                    <ul style={{textAlign:"left"}}>
                        <li>May 2016 - August 2016</li>
                        <li>Updated the company’s monitoring website using AngularJS.</li>
                        <li>Created responsive web designs for any screen size.</li>
                        <li>Integrated AngularJS into existing Symfony2 web framework.</li>
                    </ul>
                </li>
            </ul>
        </p>
    </Layout>
)

export default IndexPage
