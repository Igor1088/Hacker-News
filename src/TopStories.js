import React, { Component } from 'react';
import axios from 'axios';
import StoryItem from './StoryItem';

class TopStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: []
    }

    this.getIds = this.getIds.bind(this);
    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getIds();
  }

  getIds() {
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const start = this.state.stories.length;
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
      this.setState({ stories: this.state.stories.concat(data)});
    })
  }

  handleClick() {
    this.getIds();
  }

  render() {
    let items;
    const { stories } = this.state;
    if(stories.length !== 0) {
      items = stories.map((i, key) => {
        return <StoryItem key={key} id={key} data={i} />;
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

export default TopStories;
