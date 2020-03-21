import React from 'react'
import { Link } from 'react-router-dom'
import './chooseOption.css'

export default function ChooseOption(){
    return (
        <div className="ChooseOption">
            <div className="centerContainer">
            <div className="guideText">
                    choose
                </div>
                <Link to="submit"><button className="button">submit</button></Link>
                <Link to="suggestion"><button className="button">suggestion</button></Link>
            </div>
        </div>
    )
}