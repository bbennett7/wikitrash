import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetSearchItem } from '../actions/items'

class NavLink extends Component {
  render() {
    return (
      <Link className="Nav-item" id={this.props.id} to={this.props.url} onClick={this.props.resetSearchItem}>{this.props.text}</Link>
    )
  }
}

export default connect(null, { resetSearchItem })(NavLink)
