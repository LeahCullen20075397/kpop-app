import React from 'react';
import {storiesOf} from '@storybook/react';
import EventForm from '../src/components/eventForm';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import EventItem from '../src/components/eventItem';
import EventList from '../src/components/eventList';
import {action} from "@storybook/addon-actions";

const post = {
    id: 1,
    event: "Moodle",
    poster: "Joe Bloggs",
    location: "Waterford",
    date: "28/10/2020",
    time: "20:00",
    link: "http://moodle.wit.ie",
    comments: [],
    upvotes: 10
}

storiesOf("Kpop Events App/eventForm", module).add("default", () => <EventForm />);
storiesOf("Kpop Events App/Event Item", module)
    .add("default", () => <EventItem post = {post} upvoteHandler = {action("upvoted")}/>
    )
    .add("No hyperlink", () => <EventItem post = {{...post, link: ""}} upvoteHandler = {action("upvoted")}/>
    );
storiesOf("Kpop Events App/Event List", module)
    .add("default", () => {
        const defaultPosts = [
            {...post, id: 1, event: "Post 1", upvotes: 20},
            {...post, id: 2, event: "Post 2", upvotes: 25},
            {...post, id: 3, event: "Post 3", upvotes: 30},
            {...post, id: 4, event: "Post 4", upvotes: 35}
        ];
        return <EventList posts = {defaultPosts} />
    });