import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ConcertCard extends Component {


  render() {
    return(
      <div style={{ marginTop: '30px' }}>
        <div>
          <h3> <Link key={this.props.concert.id} to={`/concerts/${this.props.concert.id}`}>{this.props.concert.band}</Link> </h3>
          <br></br>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    concerts: state.concerts
  }
 }
export default connect(mapStateToProps,ConcertCard);
