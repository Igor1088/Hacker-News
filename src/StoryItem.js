import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const StoryItem = (props) => {
    return (
      <li key={props.id} className="list-group-item text-left">
        <div className="media">
          <div className="media-left">
            <div className="item-num">{props.id + 1}.</div>
          </div>
          <div className="media-body">
            <a
              href={props.data.url}
              className="media-heading"
              target="_blank"
            >
              {props.data.title}
            </a>
            <p>{props.data.score} point by <Link to={'/user/' + props.data.by}>{props.data.by}</Link> <span>posted {moment(props.data.time*1000).fromNow()}</span></p>
          </div>
        </div>
      </li>
    );
}

export default StoryItem;
