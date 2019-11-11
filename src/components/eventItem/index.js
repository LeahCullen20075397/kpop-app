import React, {Component, Fragment} from 'react';
import './eventItem.css';
import {Link} from 'react-router-dom';
import '../../App.js';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

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
               <div className="d-flex flex-column" class="container "  style={{backgroundColor:'#75B9C0', margin:'10px', borderRadius: '25px'}}>
                <p></p>
                    <ButtonGroup size='lg' >
                        <Button  style={{backgroundColor: '#F196B4'}} className = "eventitem">{line}</Button>
                        <Button  style={{backgroundColor: '#69C494'}} > <Link to={`/posts/${this.props.post.id}`}> Comments</Link></Button>
                        <Button  variant="primary" className = "ptr" onClick = {this.handleVote} className="glyphicon glyphicon-thumbs-up btn-md">Like  {`${this.props.post.upvotes}`} </Button>
                    </ButtonGroup>
                
                <p></p>
                <ul class="list-group">
                    <li class="list-group-item"><i>{this.props.post.date}</i></li>
                    <li class="list-group-item"><i>{this.props.post.time}</i></li>
                    <li class="list-group-item"><b>Posted by: {this.props.post.poster}</b></li>
                </ul>
                <span>
                    <Button variant="danger"className = "gylphicon glyphicon-remove btn-md">Delete</Button>
                </span>
                <p></p>
                </div>
                </Fragment>
      
        );
    }
}