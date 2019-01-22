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
        <h2>Large Personal Projects</h2>
        <p>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Spotify Playlist Creator</b>
                    <ul style={{textAlign:"left"}}>
                        <li><a href="https://github.com/bristola/spotify_playlist_creator">GitHub Link</a></li>
                        <li>This project is a website which allows you to quickly create Spotify playlist based on a certain number of options. From one playlist, you can create another playlist which has only songs of a certain genre, artist, album, popularity, etc. The backend of the server which handles requests as well as Spotify authorization. It uses Spring Boot as a website framework and the Spotify web API.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Distributed Java Workflow</b>
                    <ul style={{textAlign:"left"}}>
                        <li><a href="https://github.com/bristola/Distributed_Java_Workflow">GitHub Link</a></li>
                        <li>This Java project was originally made for a distributed computing class. The system allows the user to chain together a workflow or an acyclic graph of Java code tasks. It will take the tasks and execute them automatically on different amazon web service instances. This is all based on filling out config file before execution.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>AI Soccer game</b>
                    <ul style={{textAlign:"left"}}>
                        <li><a href="https://github.com/Allegheny-College-Science-310-F2018/project-cmpsc-310-fall-2018-allegheny-college-activision-jv-squad">GitHub Link</a></li>
                        <li>This project is a game developed from scratch in Python using various libraries and developed with a classmate. It is a physics based soccer game with an AI controlled player. A link to a demo of the game can be found in the README of the GitHub repository.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>News and Social Media Analysis</b>
                    <ul style={{textAlign:"left"}}>
                        <li><a href="https://github.com/bristola/social_news_analysis">GitHub Link</a></li>
                        <li>This project is currently being developed for my senior project at Allegheny College. It is a large Python program which collects and analyzes large amounts of media data. It will also have a website front end to interact with.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Database Grapher</b>
                    <ul style={{textAlign:"left"}}>
                        <li><a href="https://github.com/bristola/DatabaseGrapher">GitHub Link</a></li>
                        <li>This Java project was to be able to automatically make graphs using an Sqlite3 database. Just simply put a Sqlite3 file in the Database directory, and run the program using the instructions. Detects various databases, columns, variables, and foreign key relationships, and automatically creates either a bar graph or a line graph.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Automatic Crypto Currency Trader</b>
                    <ul style={{textAlign:"left"}}>
                        <li>Source code private</li>
                        <li>This is a large Python project made for the company Azariel Technologies LLC which I have co-founded. Automatically trades crypto currencies using different methods such as market analysis, and runs the programs with amazon web services.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Interactive Lecture Website</b>
                    <ul style={{textAlign:"left"}}>
                        <li><a href="https://github.com/bristola/interactive-lecture">GitHub Link</a></li>
                        <li>A website written in Python with the Flask framework. The goal of the project is to make a common place for teachers, and users to share lecture content and to interact throughout the lecture. This project is not completed and will be continued to be worked on.</li>
                    </ul>
                </li>
            </ul>
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Day Planner</b>
                    <ul style={{textAlign:"left"}}>
                        <li><a href="https://github.com/bristola/cs250-FinalProject">GitHub Link</a></li>
                        <li>The final project for an analysis of algorithms class, and this project was written with a classmate. It will automatically plan out a restaraunt and activity for users to do based on their locations, likes, and dislikes.</li>
                    </ul>
                </li>
            </ul>
        </p>
    </Layout>
)

export default IndexPage
