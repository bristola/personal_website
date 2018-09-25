import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <ul>
            <Link to="/index/"><li><a href="">About</a></li></Link>
            <Link to="/page-2/"><li><a href="">Education</a></li></Link>
            <Link to="/page-3/"><li><a className="active" href="">Experience</a></li></Link>
            <Link to="/page-4/"><li><a href="">Projects</a></li></Link>
        </ul>
        <h1>Experience Title</h1>
        <p>Experience section goes here</p>
    </Layout>
)

export default IndexPage
