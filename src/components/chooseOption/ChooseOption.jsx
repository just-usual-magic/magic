import React from 'react'
import { Link } from 'react-router-dom'
import './chooseOption.css'
import {db} from '../firebase/firebase'

export default class ChooseOption extends React.Component{


    componentDidMount() {
        this.randomSuggestion();
    }
    
    render(){
        if (this.state != undefined){
            return (
                <div className="ChooseOption">
                        <div className="guideText">
                            <p className="activityTitle">{this.state.suggestion.title}</p>
                            <div class="line"></div>
                            <p className="activityDescription">{this.state.suggestion.description}</p>
                        </div>
                        <ul className="buttonContainer">
                            <li><Link to="submit"><button className="button">contribute ideas</button></Link></li>
                            <li><button className="button" onClick={() => this.randomSuggestion()}>new suggestion</button></li>
                        </ul>
                </div>
            )    
        }else{
            return(
                <div className="ChooseOption">
                       
                </div>
            )
        }   
    }

    randomSuggestion(){
        if (this.state == undefined){
            let activities = db.ref('actions/');
            activities.once('value', function (snapshot) {
                    let suggestionList = snapshot.val();
                    console.log(suggestionList)
                    this.setState({
                        suggestionList: suggestionList,
                        suggestion: suggestionList[Math.floor(Math.random() * suggestionList.length)]
                    });
            }.bind(this));
        }else{
            this.setState({
                suggestion : this.state.suggestionList[Math.floor(Math.random() * this.state.suggestionList.length)]
            })
        }
    }
        
}




