import React from 'react'
import {Link} from 'react-router-dom'
import './submit.css';
export default function Submit(){
    return (
        <div className="Submit">
            <div className="guideText">
                    <form action="POST" autoComplete="off">
                        <input type="text" placeholder="Your idea" name="ideaName"/>
                        <textarea name="description" id="" cols="30" rows="5" placeholder="Describe your idea"></textarea>
                    </form>
                </div>
                <ul className="buttonContainer">
                    <li><Link to="/thanks"><button className="button">submit your idea</button></Link></li>
                </ul>
        </div>
    )
}