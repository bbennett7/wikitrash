import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.searchItems(this.state.searchInput)

    this.setState({
      searchInput: ''
    })
  }

  render() {
    return (
      <form className="Search" onSubmit={this.handleOnSubmit}>
      <label> <input type="text" onChange={this.handleOnChange} value={this.state.searchInput} /> </label>
      <input type="submit" value="Search" />
      </form>
    )
  }
}
