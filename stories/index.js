import React from 'react';
import {storiesOf} from '@storybook/react';
import EventForm from '../src/components/eventForm';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import EventItem from '../src/components/eventItem';

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
    .add("default", () => <EventItem post = {post}/>
    )
    .add("No hyperlink", () => <EventItem post = {{...post, link: ""}}/>
    );