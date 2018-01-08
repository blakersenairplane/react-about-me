import React, { Component } from "react"
import {string} from "prop-types"

export default class extends Component {
    render() {
        return (
            <div class="resumeBody">
                <div class="resumeTop">
                    <div class="resumeName">
                        Blake Jensen
                    </div>
                    <div class="resumeAddress">
                        1351 W Stewart Falls Dr, Riverton UT, 84065 | C: 801-897-2500 | blakersen@gmail.com
                    </div>
                    <div class="resumeSummary">
                        <div class="name"><br/>Summary</div>
                        <p>
                            Resourceful Server Engineer with a primary background in supporting enterprise level 
                            applications in a high availability environment.  Strong verbal communication skills...
                            approachable nature and attitude facilitates rappport and trustworthy atmosphere with management, 
                            co-workers and the general public... Manage workload in a timely and efficient manner with complete
                            accountability and accuracy... ethical with a sense of humor that keeps morale high.
                        </p>
                    </div>
                </div>

                <div class="resumeHighlights">
                    <div class="name">
                        Highlights
                    </div>
                    <div class="resumeHighlightPoints">
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <ul>
                                <li>React</li>
                                <li>Oracle Knowledge 8.1, 8.5, 8.6</li>
                                <li>Weblogic</li>
                                <li>Tomcat</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Linux</li>
                                <li>Javascript</li>
                                <li>BASH</li>
                                <li>nodeJS</li>
                                <li>monogoDB</li>
                                <li>HTML / CSS </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="resumeExperience">
                    <div class="name">
                        Experience
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <div>May 2008 - Present</div>
                    </div>
                    <div>
                        <div><b>Software Engineer 2</b></div>
                        <div><b>eBay Inc.</b></div>
                        <ul>
                            <li>Install, maintain and upgrade Oracle Knowledge 8.6</li>
                            <li>Maintain 99.6 % availability on managed applications</li>
                            <li>Develop several simple C# / ASP applications that have had little downtime or 
                                maintenance required
                            </li>
                            <li>Diagnose and help debug issues with custom developed software</li>
                            <li>Manage the implementation and modification of packaged software to 
                                help meet the need of eBay
                            </li>
                            <li>Manage a server environment of over 50 servers and ensure the software is maintained approrpiately</li>
                            <li>Manage deployment of custom and packaged software when development changes have been applied</li>
                            <li>Managed and maintained active Disaster Recovery environment</li>
                        </ul>
                    </div>
                    <div>
                        <div>December 2007 - May 2008</div>
                    </div>
                    <div>
                        <div><b>L2 Support Technician</b></div>
                        <div><b>eBay Inc. IT (Planet Consulting)</b></div>
                        <ul>
                            <li>Windows Domain Administration</li>
                            <li>VPN technology support</li>
                            <li>Agent monitoring application installation / support</li>
                            <li>PC & Laptop troubleshooting / repair</li>
                            <li>Re-image systems and provide inventory management</li>
                            <li>Troubleshoot Microsoft Exchange issues</li>
                            <li>Maintain servers in local onsite server room</li>
                        </ul>
                    </div>
                    <div>
                        <div>April 2006 - December 2007</div>
                    </div>
                    <div>
                        <div><b>eBay Customer Support / Prohibited Items</b></div>
                        <div><b>eBay Inc. IT</b></div>
                        <ul>
                            <li>Provide customer support to eBay users</li>
                            <li>Work with legal to identify problematic items on the site</li>
                            <li>Understand and maintain KB on probitited items</li>
                        </ul>
                    </div>
                    <div>
                        <div>July 2004 - April 2006</div>
                    </div>
                    <div>
                        <div><b>Memory Tester L2 / Move team</b></div>
                        <div><b>Micron Technology</b></div>
                        <ul>
                            <li>Test memory and identify processes that could potentially improve the system</li>
                            <li>Work with team to move heavy items during building of memory fabrication facility</li>
                            <li>Manage workload in a timely manner to ensure all memory testing quotas were met</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}