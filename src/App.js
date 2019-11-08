import React, {Component} from 'react';
import EventList from './components/eventList';
import Form from './components/eventForm';

export default class App extends Component{
  render() {
    const testPosts = [
      {
        id: 1,
        event: "KPOP World Festival 2019 Ireland",
        poster: "Leah Cullen",
        location: "The Helix - DCU",
        date: "4-July-2019",
        time: "18:00-22:00",
        link: "https://www.eventbrite.ie/e/kpop-world-festival-2019-ireland-tickets-63424205506",
        comments: [],
        upvotes: 10
      },
      {
        id: 2,
        event: "Kpop & Khiphop Party x KEvents in Dublin",
        poster: "Turks Head",
        location: "Turks Head - Parliament Street Temple Bar",
        date: "29-Nov-2019",
        time: "22:00-03:00",
        link: "https://www.facebook.com/events/396661737605767/",
        comments: [],
        upvotes: 12
      },
      {
        id: 3,
        event: "K Music at London Purcell Room",
        poster: "Lisa Kim",
        location: "Purcell Room - London",
        date: "18/Nov/2019",
        time: "Not yet disclosed...",
        link: "https://www.stereoboard.com/k-music-tickets/london",
        comments: [],
        upvotes: 15
      }
    ];
    return(
      <div className = "jumbotron">
        <div className = "container-fluid">
          <div className = "row">
            <div className = "col-md-6 offset-3">
              <h1>
                <a href = "/">KPoppers Unite!</a>
              </h1>
            </div>
          </div>
          <div className = "row">
            <div className = "col-md-4">
              <Form />
            </div>
            <div className = "col-md-8">
              <EventList posts = {testPosts}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
