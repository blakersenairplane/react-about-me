import React, { Component } from "react"
import {string} from "prop-types"

export default class extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src="./pics/blake.jpg"/>
                </div>
                <div class="interests">

                    <ul>
                        <li>Snowboarding</li>
                        <li>Mountain Biking</li>
                        <li>Jeeping</li>
                        <li>Hiking</li>
                        <li>Camping</li>
                    </ul>
                </div>
            </div>
        )
    }
}