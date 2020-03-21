import React from 'react'
import {Link} from 'react-router-dom'
export default function Submit(){
    return (
        <div className="Submit">
            <div className="guideText">
                    submit
                </div>
                <ul className="buttonContainer">
                    <li><Link to="/"><button className="button">Stuff</button></Link>  </li>
                </ul>
        </div>
    )
}