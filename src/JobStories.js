import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class JobStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    }

    this.getIds = this.getIds.bind(this);
    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getIds();
  }

  getIds() {
    const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
    const start = this.state.jobs.length;
    const maxStories = start + 10;
    axios.get(url).then(response => {
      const data = response.data;
      for (var i = start; i < maxStories; i++) {
        this.getData(data[i]);
      }
    });
  }

  getData(id) {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    axios.get(url).then(response => {
      const data = response.data;
      this.setState({ jobs: this.state.jobs.concat(data)});
    })
  }

  handleClick() {
    this.getIds();
  }

  render() {
    let items;
    const { jobs } = this.state;
    if(jobs.length !== 0) {
      items = jobs.map((i, key) => {
        return (
          <li key={key} className="list-group-item text-left">
            <div className="media">
              <div className="media-body">
                <a
                  href={i.url}
                  className="media-heading"
                  target="_blank"
                >
                  {i.title}
                </a>
                <p>posted {moment(i.time * 1000).fromNow()}</p>
              </div>
            </div>
          </li>
        );
      });
    }
    return (
      <div>
        <ul className="list-group">
          {items ? items : <div className="loader"></div>}
        </ul>
        <button className="btn btn-default" onClick={this.handleClick}>More</button>
      </div>
    );
  }
}

export default JobStories;
