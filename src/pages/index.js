import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <ul>
            <li><a className="active" href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Education</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Projects</a></li>
        </ul>
        <h1>Hi people testing to see if this works</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        //<Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage
