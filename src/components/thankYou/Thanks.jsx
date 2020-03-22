import React from 'react'
import {Link} from 'react-router-dom'

export default function Thanks(){
    return (
        <div className="Thanks">
            THANK YOU
            <ul className="buttonContainer">
                    <li><Link to="/"><button className="button">To beginning</button></Link></li>
            </ul>
        </div>
    )
}