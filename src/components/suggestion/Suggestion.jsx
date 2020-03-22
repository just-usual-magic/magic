import React from 'react';
import {Link} from 'react-router-dom'
import {db} from '../firebase/firebase'

export default class Suggestion extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.randomSuggestion();
    }

    render() {
        console.log(this.state)
        if(this.state != undefined){
            return(
                <div className="Suggestion">
                    <div className="guideText">
                        {this.state.suggestion.title}
                    </div>
                    <ul className="buttonContainer">
                        <li><Link to="/"><button className="button">To beginning</button></Link></li>
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div className="Suggestion">
                    <div className="guideText">

                    </div>
                    <ul className="buttonContainer">
                        <li><Link to="/"><button className="button">To beginning</button></Link></li>
                    </ul>
                </div>
            )
        }
    }

    randomSuggestion(){
        let activities = db.ref('actions/');
        activities.on('value', function (snapshot) {
            let suggestionList = snapshot.val();
            console.log(suggestionList)
            this.setState({
                suggestion: suggestionList[Math.floor(Math.random() * suggestionList.length)]
            });
        }.bind(this));
    }
}