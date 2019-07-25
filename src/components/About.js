import React, { Component } from 'react';
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Main">
        <h2 className="Title">about</h2>
        <div id="About-text">
          <p>WikiTrash is a place to find rules and tips on the responsible disposable of all items. Members of our community can add information on item, including rules/necessary steps in order for the item to be recyclable, specific locations that accept the item for recycling (if it cannot go in a recycling bin), and references they used to source the information.</p>

          <p>After an item is added, it is listed as an "unverified" item. Here, our community votes on whether the information is correct and helpful or not. If the item receives 10 positive votes, it will go into our database of recycling tips. If it receives 10 negative votes, it will be removed from our site.</p>
        </div>
      </div>
    )
  }
}
