import React, {Component, Fragment} from 'react';
import EventItem from '../eventItem';

export default class EventList extends Component{
    render() {
        let items = this.props.posts.map((post, index) => (
            <EventItem
                key = {post.id}
                post = {post}
            />
        ));
        return <Fragment>{items}</Fragment>
    }
}