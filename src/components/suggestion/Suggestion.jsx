import React from 'react';
import {Link} from 'react-router-dom'
export default function suggestion(){
    return(
        <div class="Suggestion">
            <div className="guideText">
                    suggest
            </div>
                <ul className="buttonContainer">
                    <li><Link to="/"><button className="button">To beginning</button></Link></li>
                </ul>
        </div>
    )
}