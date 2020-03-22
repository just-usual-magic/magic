import React from 'react'
import {Link} from 'react-router-dom'
import './submit.css';
export default function Submit(){
    return (
        <div className="Submit">
            <div className="guideText">
                    <form action="POST">
                        <input type="text" placeholder="Your idea" name="ideaName"/>
                        <textarea name="description" id="" cols="30" rows="5"></textarea>
                    </form>
                </div>
                <ul className="buttonContainer">
                    <li><Link to="/"><button className="button">submit your idea</button></Link></li>
                </ul>
        </div>
    )
}