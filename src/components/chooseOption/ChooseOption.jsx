import React from 'react'
import { Link } from 'react-router-dom'
import './chooseOption.css'

export default function ChooseOption(){
    return (
        <div className="ChooseOption centerThis">
            Make your choice<br/>
            <Link to="submit">Submit sth</Link><br/>
            <Link to="suggestion">get something to do</Link>
        </div>
    )
}