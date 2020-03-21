import React from 'react';
import {Link} from 'react-router-dom'
export default function suggestion(){
    return(
        <div class="Suggestion">
            <div className="centeredContainer">
            <div className="guideText">
                    suggest
                </div>
            <Link to="/"><button className="button">To beginning</button></Link>
            </div>
        </div>
    )
}