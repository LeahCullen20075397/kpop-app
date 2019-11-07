import React, {Component} from 'react';
import './eventForm.css';

export default class Form extends Component{
    render() {
        return(
            <form className = "form bg-success text-light">
                <h3>Add an Event</h3>
                <div className = "form-group">
                    <input 
                        type = "text"
                        className = "form-control"
                        placeholder = "Event Name"></input>
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Poster"></input>
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Location"></input>
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Date"></input>
                </div>
                <div className = "form-group">
                    <input
                        type = "text"
                        className = "form-control"
                        placeholder = "Time"></input>
                </div>
                <div className = "form-group">
                    <input  
                        type = "text"
                        className = "form-control"
                        placeholder = "Link"></input>
                </div>
                <button type = "submit" className = "btn btn-primary">Add</button>
            </form>
        );
    }
}