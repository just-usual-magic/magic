import React from 'react';
import {Link} from 'react-router-dom'

export default function suggestion(){
    return(
        <div className="Suggestion">
            <div className="guideText">
                my suggestions
            </div>
                <ul className="buttonContainer">
                    <li><Link to="/thanks"><button className="button">To beginning</button></Link></li>
                </ul>
        </div>
    )
}
