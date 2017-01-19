import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const id = this.props.params.id;
    const url = `https://hacker-news.firebaseio.com/v0/user/${id}.json`;
    axios.get(url).then(response => {
      const data = response.data;
      this.setState({user: data});
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <p>user: {user.id}</p>
        <p>karma: {user.karma}</p>
        {
          user.about ? <p>about: {this.state.user.about}</p> : ''
        }
      </div>
    );
  }
}

export default User;
