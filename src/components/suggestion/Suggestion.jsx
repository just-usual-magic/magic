import React from 'react';
import {Link} from 'react-router-dom'
import {db} from '../firebase/firebase'

export default class Suggestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            suggestion : {
                Title : "empty"
            },
        }
        this.randomSuggestion()
    }

    componentDidMount(){
    }


    render() {
        console.log("Rendering")
        console.log(this.state)
        return(
            <div className="Suggestion">
                <div className="guideText">
                    {this.state.suggestion.Title}
                </div>
                <ul className="buttonContainer">
                    <li><Link to="/thanks"><button className="button">To beginning</button></Link></li>
                </ul>
            </div>
        )
    }

    randomSuggestion(){
        let activities = db.ref('activities/');
        activities.on('value', function(snapshot){
            let suggestionList = snapshot.val();
            console.log(suggestionList);
            this.setState({
                suggestion : suggestionList["10pushups"]
            });
        }.bind(this));
    }
}
