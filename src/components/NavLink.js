import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetSearchItem } from '../actions/items'

class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.url} onClick={this.props.resetSearchItem}>{this.props.text}</Link>
    )
  }
}

export default connect(null, { resetSearchItem })(NavLink)
