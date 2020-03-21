import React from 'react'
import {
    Link
  } from "react-router-dom";
import './welcome.css'

import Firebase from '../firebase'

export default function Welcome(){

    var actions = Firebase.db.ref('actions/');
    actions.on('value', function(snapshot){
       console.log(snapshot.val()); 
    });
    return(
        <div className="Welcome">
                <div className="guideText">
                    Hier könnt ihr euch neue Ideen holen, was ihr in der Krise zuhause machen könnt, und somit euch und die Menschen in eurer Umwelt schützt.
                    Wenn ihr gute Ideen habt könnt ihr sie hier auch hinzufügen, so können sie andere Leute sehen
                </div>
                <ul className="buttonContainer">
                   <li><Link to="/option"><button className="button">continue</button></Link></li>
                </ul>
                
        </div>
    )
}
