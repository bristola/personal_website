import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <ul>
            <Link to="/"><li><a href="">About</a></li></Link>
            <Link to="/page-2/"><li><a className="active" href="">Education</a></li></Link>
            <Link to="/page-3/"><li><a href="">Experience</a></li></Link>
            <Link to="/page-4/"><li><a href="">Projects</a></li></Link>
        </ul>
        <h1>Education Title</h1>
        <p>Education section goes here</p>
    </Layout>
)

export default IndexPage
