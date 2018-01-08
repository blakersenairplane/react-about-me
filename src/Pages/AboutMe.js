import React, { Component } from "react"
import {string} from "prop-types"

export default class extends Component {
    render() {
        return (
            <div>
                
                <div class="topAboutMe">
                    <div class="topLeftAboutMe">
                        <img src="https://i.imgur.com/DKTzZBj.jpg" width="320px" height="370px"/>
                    </div>
                    <div class="topRightAboutMe">
                        <div class ="nameDate">
                            <div class="name">
                                <h2>Blake Jensen</h2>
                            </div>
                            <div class="date">
                                <h3>01-08-2018</h3>
                            </div>
                        </div>
                        <div class="aboutText">
                            <p>
                                I was originally born in Lethbridge, Alberta. I lived in Calgary Alberta until I was
                                20 years old.  I then moved to Salt Lake City, Utah where I have lived for the past
                                15 years.                         
                            </p>

                            <p>
                                My interests are:
                            </p>
                            <ul>
                                <li>Mountain Biking</li>
                                <li>Hiking</li>
                                <li>Snowboarding</li>
                                <li>Programming (Python / JavaScript)</li>
                                <li>Going to the movie theater</li>
                                <li>Photography</li>
                                <li>Camping / Jeeping</li>
                                <li>Nintendo Switch</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="aboutMeMiddle">
                    <div>
                    <img src="https://static1.squarespace.com/static/5812661346c3c437b99cd34b/58148eca44024385b4e20373/582365eff7e0ab9a6a2b041b/1486500574048/logo-cannondale.jpg" alt="cannondale" width="184px"/>
                    </div>
                    <div>
                    <img src="http://ecodile.com/wp-content/uploads/2016/08/react-logo-1000-transparent.png" alt="react" width="184px"/>
                    </div>
                    <div>
                    <img src="https://www.python.org/static/opengraph-icon-200x200.png" alt="python" width="184px"/>
                    </div>
                    <div>
                    <img src="http://www.joonet.net/sites/default/files/styles/adaptive/adaptive-image/public/javascript.png?itok=qPyOTP5c" alt="javascript" width="184px"/>
                    </div>
                </div>
                <div class="aboutMeBottom">
                    <p>
                        <h3>What I am looking forward to: </h3>
                        I am looking forward to doing a lot of mountain biking this summer.  I have a six week 
                        sabbatical from work this year that I am planning on using to do a lot of camping in my Jeep 
                        and biking over the summer.  I am also looking forward into devling more into the programing 
                        side of things over the course of this year.
                    </p>
                </div>
            </div>
        )
    }
}