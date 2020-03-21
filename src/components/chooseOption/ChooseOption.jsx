import React from 'react'
import { Link } from 'react-router-dom'
import './chooseOption.css'

export default function ChooseOption(){
    return (
        <div className="ChooseOption">
                <div className="guideText">
                        choose
                </div>
                <ul className="buttonContainer">
                    <li><Link to="submit"><button className="button">submit</button></Link></li>
                    <li><Link to="suggestion"><button className="button">suggestionasd</button></Link></li>
                </ul>
        </div>
    )
}