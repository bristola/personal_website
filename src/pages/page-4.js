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
            <ul style={{marginTop:"13px", textAlign:"left"}}>
                <li style={{}}>
                    <b>Gator Grader</b>
                    <ul style={{textAlign:"left"}}>
                        <li><a href="https://github.com/GatorEducator/gatorgrader">GitHub Link</a></li>
                        <li>Gator Grader is a tool developed in Python which allows users to check the correctness of students work. It allows for many configurable checks, and when used in conjunction with Gradle, can be used to easily check that all work is completed for an assignment. I have participated in the development of this software system in Computer Science 481. Our group has worked on a new sample repository for new users to easily get latex projects working. Also, we developed a new feature to the gatorgrader system; we developed a regex checker, so that the user can check for regular expressions in different files.</li>
                        <li><b>Week 1: </b>In the first week of working on this project, we just set up the outine of what we planned to do. We joined a team in the class, and our team was given a task. Also, we worked with our team to ensure that every member could run, test, and develop gatorgrader. I was able to get stuff set up on my computer fairly easily, but few team members had to work around some computer challenges at this stage.</li>
                        <li><b>Week 2: </b>Our first assignment as a team was to create a sample latex assignment that demonstrates the functionality of gatorgrader. My team members added all the necessary files, much like the Java or Python sample repositories. Namely, a sample latex file and bibtex file were added in order to show how gatorgrader can be used for this sort of project. This week, I added the gatorgrader.yml file, and added some preliminary checks that would be common in a latex project. This ensured that we could get gatorgrader working with our latex project.</li>
                        <li><b>Week 3: </b>This week, we continued to work on enhancing our latex assignment starter repository. We also started to think that having a more variable way of counting fragments would be helpful. Discussing with other teams, we determined that having something like regular expression support would be a much welcomed feature. This way, you can go above and beyond just normal fragment counting. We started to analyze existing code, and determining how this feature would fit in. I started by writing some code for regex checking with my team. I added functions for checking regex counts and valid regex checker. This feature was originially added to the existing fragment checking functionality. I just made the checking function that was used for counting the current fragment be our new regex checker if the user input fragment is a valid regex. This implementation was a little faulty due to not knowing that we wanted regex to be our own argument.</li>
                        <li><b>Week 4: </b>During week 4, we changed how regex checking worked. Instead of going through the existing fragment checking argument, my team and I added a new argument. I wrote a lot of the orchestration and invocation code to get regex checking functionality to work in the system. My teammates worked on adding a brand new argument for regex, that will help determine when we run the checks that we added. Also, we worked on adding test cases for all the new code that we added for the new regex functionality. After this week however, our code still broke when running our new argument.</li>
                        <li><b>Week 5: </b>We started where we ended this week; working on the regex functionality. Whenever we used the regex argument, we got an error saying that we had invalid arguments. We were finally able to figure this problem out. The problem was that in the arguments code, it checked to see if there was a valid check command. This ensured that a check argument existed, but a fragment did not exist. The reason our code was failing was that we had to check to that a regex did not exist either. After we added this to the function, our code worked and everything continued as expected. We continued to enhance the test suite, and test our code with the latex starter.</li>
                        <li><b>Week 6: </b>In the final week of development, we made final changes to our software feature implementation. We had small bugs in the code to fix, including one which caused the entire tool to crash if invalid regex was input by the user. This, along with others was fixed by the team. Likewise, we had multiple problems with linting tools which were causing the build to break. We worked together as a team to figure out where the problems originated and fixed them. Also, this required us to converse with a maintainer in order to tackle a linting problem out of our control. Finally, we ensured in this final week that the test suite still maintained a 100% coverage, as well as all tests still passed. Both of these tasks were completed as we opened a final pull request to add our final feature to the production version of Gator Grader.</li>
                    </ul>
                </li>
            </ul>
        </p>
    </Layout>
)

export default IndexPage
