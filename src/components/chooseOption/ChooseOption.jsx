import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './chooseOption.css'
import {db} from '../firebase/firebase'


export default function ChooseOption(){
    let [activities, setActivities] = useState([]);
    let [selectedActivity, setSelectedActivity] = useState("call your family");

    useEffect(() => {
        getAvailableActivities();
    })

    const getAvailableActivities = () => {
        let suggestionList = []
        let ref = db.ref('actions/');
        ref.on('value', (data) => {
            if(activities.length === 0){
                console.log("activities about to be set")
                setActivities(
                    data.val()
                )
            }
        });
    }

    const getNewRandomActivity = () => {
        console.log(activities.length);
        if(activities.length !== 0){
            return activities[Math.floor(Math.random()*activities.length)];
        }else{
            return "Join discord"
        }
    }
        
    return (
        <div className="ChooseOption">
                <div className="guideText">
                        {selectedActivity.title}
                </div>
                <ul className="buttonContainer">
                    <li><Link to="submit"><button className="button">contribute ideas</button></Link></li>
                    <li><button className="button" onClick={() => setSelectedActivity(getNewRandomActivity)}>new suggestion</button></li>
                </ul>
        </div>
    )
}




