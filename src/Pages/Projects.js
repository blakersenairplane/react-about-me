import React, { Component } from "react"
import {string} from "prop-types"

export default class extends Component {
    render() {
        return (
            <div class="projectsBody">
                <div class="projectsLeft">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="236px"/>
                </div>
                <div class="projectsRight">
                    <div class="name">
                        <div class="projectsName">First React Project</div>
                    </div>
                    <div>
                        <ul>
                            <li>Create react application</li>
                            <li>Create router for navigation</li>
                            <li>Modify content and pages</li>
                            <li>Create components for React application</li>
                        </ul>
                    </div>
                </div>
                <div class="projectsLeft">
                    <img src="http://galaxyconsulting.weebly.com/uploads/3/9/7/8/3978170/3278338.jpg" width="236px"/>
                </div>
                <div class="projectsRight">
                    <div class="name">
                        <div class="projectsName">Oracle Knowledge 8.6 migration</div>
                    </div>
                    <div>
                        <ul>
                            <li>Install required library files for servers</li>
                            <li>Install and configure VNC to run through firewall</li>
                            <li>Manage transition from old data center to new data center</li>
                            <li>Install InfoManager, InfoCenter, Search and analytics components</li>
                            <li>Ensure application is able to transition without downtime</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}