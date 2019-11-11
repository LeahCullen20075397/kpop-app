import React, {Component, Fragment} from 'react';
import EventItem from '../eventItem';

export default class EventList extends Component{
    render() {
        let items = this.props.posts.map((post, index) => (
            <EventItem
                key = {index}
                post = {post}
                upvoteHandler = {this.props.upvoteHandler}
                deleteHandler = {this.props.deleteHandler}
            />
        ));
        return <Fragment>{items}</Fragment>
    }
}