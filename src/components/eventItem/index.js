import React, {Component, Fragment} from 'react';
import './eventItem.css';

export default class EventItem extends Component {
    render() {
        let line = this.props.post.link ? (
            <a href = {this.props.post.link}>{this.props.post.event}</a>
        ):(
            <span>{this.props.post.event}</span>
        );
        return (
            <Fragment>
                <span className = "eventitem">
                    {line}
                    <span>
                        <a href = "/"> Comments</a>
                    </span>
                </span>
                <span className = "ptr">
                    <button className="glyphicon glyphicon-thumbs-up btn-md">Like</button> 
                    {`${this.props.post.upvotes}`} 
                </span>
                <p className = "location">{this.props.post.location}</p>
                <p className = "date">{this.props.post.date}</p>
                <p className = "time">{this.props.post.time}</p>
                <p className = "poster">Posted by: {this.props.post.poster}</p>
            </Fragment>
        );
    }
}