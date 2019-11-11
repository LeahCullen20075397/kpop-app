import React, {Component, Fragment} from 'react';
import './eventItem.css';
import {Link} from 'react-router-dom';
import '../../App.js';

export default class EventItem extends Component {
    handleVote = () => this.props.upvoteHandler(this.props.post.id);
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
                        <Link to={`/posts/${this.props.post.id}`}> Comments</Link>
                    </span>
                </span>
                <span className = "ptr" onClick = {this.handleVote}>
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