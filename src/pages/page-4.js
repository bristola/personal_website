import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <ul className="tabs1">
            <Link to="/"><li className="tabs2"><a href="">About</a></li></Link>
            <Link to="/page-2/"><li className="tabs2"><a href="">Education</a></li></Link>
            <Link to="/page-3/"><li className="tabs2"><a href="">Experience</a></li></Link>
            <Link to="/page-4/"><li className="tabs2"><a className="active" style={{color:"#435777",}} href="">Projects</a></li></Link>
        </ul>
        <h2>Large Projects</h2>
        <p>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Database Updater</b>
                    <ul style={{textAlign:"left"}}>
                        <li>https://github.com/bristola/DatabaseGrapher</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Distributed Java Workflow</b>
                    <ul style={{textAlign:"left"}}>
                        <li>https://github.com/bristola/Distributed_Java_Workflow</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Automatic Crypto Currency Trader</b>
                    <ul style={{textAlign:"left"}}>
                        <li>Source code private</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Interactive Lecture Website</b>
                    <ul style={{textAlign:"left"}}>
                        <li>https://github.com/bristola/interactive-lecture</li>
                    </ul>
                </li>
            </ul>
        </p>
    </Layout>
)

export default IndexPage
