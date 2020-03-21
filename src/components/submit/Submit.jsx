import React from 'react'
import {Link} from 'react-router-dom'
export default function Submit(){
    return (
        <div className="Submit">
            <div className="centeredContainer">
                Share your idea<br/>
                <Link to="/"><button className="button">Stuff</button></Link>
                
            </div>
        </div>
    )
}