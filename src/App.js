import React, {Component} from 'react';
import EventList from './components/eventList';
import Form from './components/eventForm';
import api from './dataStore/stubAPI';
import _ from 'lodash';

export default class App extends Component {
  addEventItem = (event, poster, location, date, time, link) => {
    api.add(event, poster, location, date, time ,link);
    this.setState({});
  };
  incrementUpvote = (id) => {
    api.upvote(id);
    this.setState({});
  };
  render() {
    let posts = _.sortBy(api.getAll(), post => -post.upvotes);
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
              <Form handleAdd = {this.addEventItem}/>
            </div>
            <div className = "col-md-8">
              <EventList posts = {posts}
                upvoteHandler = {this.incrementUpvote}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}