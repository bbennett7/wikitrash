import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../actions/items'
import SearchBar from '../components/SearchBar';
import VerifiedItemCard from '../components/VerifiedItemCard'


class VerifiedContainer extends Component {

  renderCards = () => {
    if (this.props.items) {
      const verifiedItems = this.props.items.filter((item) => item.verified === true) || {}
      const searchItem = this.props.searchItem

      if (searchItem.length > 0 && verifiedItems.filter((item) => item.name.toLowerCase() === searchItem[0].name.toLowerCase()).length === 1) {
        return <VerifiedItemCard item={searchItem[0]} />
      } else {
        return verifiedItems.map((item) => {
          return <VerifiedItemCard item={item} />
        })
      }
    }
  }

  componentDidUpdate = () => {
    this.renderCards()
  }

  render() {
    return (
      <div className="Main">
      <h2>all items</h2>
      <p>The information on disposal of these materials has been vetted by the WikiTrash community.</p>
        <SearchBar searchItems={this.props.searchItems} />
        {this.renderCards()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {items: state.items, searchItem: state.searchItem}
}

export default connect(mapStateToProps, { searchItems })(VerifiedContainer)
