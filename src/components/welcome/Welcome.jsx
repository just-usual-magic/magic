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
        <div className="Welcome centerThis">
                Hello and welcome, this stuff works like this
                <Link to="/option">click here</Link>
        </div>
    )
}
