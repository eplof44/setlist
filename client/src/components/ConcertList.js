import { Link } from 'react-router-dom';
import React, {Component} from 'react'
import '../styles/Concerts.css'

class ConcertList extends Component {

constructor() {
  super();

  this.state = {
    likes: 0
  }


}
increaseLikes = () => {
  this.setState({
    likes: this.state.likes + 1

  })
}

render() {
  const { concert } = this.props;
  return(

      <div>
          <li><Link key={this.props.concert.id} to={`/concerts/${this.props.concert.id}`}>{this.props.concert.band} on {this.props.concert.date} at {this.props.concert.venue}  </Link></li>
          <button onClick={() => this.increaseLikes()}>Likes{this.state.likes} </button>
      </div>
)
}
}


export default ConcertList;
