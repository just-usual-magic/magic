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
                <div className="guideText">
                    Welcome
                </div>
                <Link to="/option"><button className="button">continue</button></Link>
            </div>
        </div>
    )
}
