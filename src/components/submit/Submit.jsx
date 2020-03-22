import React from 'react'
import {Link} from 'react-router-dom'
import './submit.css';
import {db} from '../firebase/firebase'



export default class Submit extends React.Component {
    state = {
        text : "",
        description : ""
    }

    render() {
        return (
            <div className="Submit">
                <div className="guideText">
                    <form action="POST" autoComplete="off">
                        <input onChange={this.changeTitle} type="text" placeholder="Your idea" name="ideaName" value={this.state.text}/>
                        <textarea onChange={this.changeDescription}  id="" cols="30" rows="5" placeholder="Describe your idea" value={this.state.description}></textarea>
                    </form>
                </div>
                <ul className="buttonContainer">
                    <li><Link to="/thanks"><button className="button" onClick={this.submitAction}>submit your idea</button></Link></li>
                </ul>
            </div>
        )
    }

    changeTitle = event => {
        this.setState({
            text : event.target.value
        })
    };

    changeDescription = event => {
        this.setState({
            description: event.target.value
        })
    };

    submitAction = event => {
        let action = {
            title : this.state.text,
            description : this.state.description
        };

        let activities = db.ref('actions/');
        activities.once('value', (data) => {
            let activitiesList = data.val();
            activitiesList.push(action);
            console.log(activitiesList);
            db.ref('actions/').set(activitiesList);
        });
    };
}

