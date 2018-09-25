import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <ul>
            <Link to="/"><li><a href="">About</a></li></Link>
            <Link to="/page-2/"><li><a href="">Education</a></li></Link>
            <Link to="/page-3/"><li><a href="">Experience</a></li></Link>
            <Link to="/page-4/"><li><a className="active" href="">Projects</a></li></Link>
        </ul>
        <h1>Projects Title</h1>
        <p>Project section goes here</p>
    </Layout>
)

export default IndexPage
