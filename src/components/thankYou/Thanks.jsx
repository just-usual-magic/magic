import React from 'react'
import {Link} from 'react-router-dom'
import ray from './ray.gif'
import './thanks.css'

export default function Thanks(){
    return (
        <div className="Thanks">
            <div class="guideText">
                <img src={ray} alt="Thank you gif"/>
            </div>
            <ul className="buttonContainer">
                    <li><Link to="/"><button className="button">To beginning</button></Link></li>
            </ul>
        </div>
    )
}