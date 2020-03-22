import React from 'react';
import {Link} from 'react-router-dom'
import {db} from '../firebase/firebase'

export default function suggestion(){
    suggestion = randomSuggestion()
    console.log(suggestion)
    return(
        <div className="Suggestion">
            <div className="guideText">
                    {suggestion.Title}
            </div>
                <ul className="buttonContainer">
                    <li><Link to="/"><button className="button">To beginning</button></Link></li>
                </ul>
        </div>
    )
}

function randomSuggestion(){
    let suggestions = []
    let activities = db.ref('activities/');
    activities.on('value', function(snapshot){
        suggestions.push(snapshot.val());
    });
    console.log(suggestions)
    return suggestions[~~(suggestions.length * Math.random())]
}