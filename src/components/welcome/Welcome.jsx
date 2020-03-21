import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './welcome.css'


export default function Welcome(){

    return(
        <div className="Welcome">
            <div className="centeredContainer">
            Hello and welcome, this stuff works like this<br/>
                <Link to="/option"><button className="button">click</button></Link>
            </div>
        </div>
    )
}
