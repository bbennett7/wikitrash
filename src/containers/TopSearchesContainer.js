import React, { Component } from 'react';
import { connect } from 'react-redux';
import VerifiedItemCard from '../components/VerifiedItemCard'

class TopSearchesContainer extends Component {

  renderCards = () => {
    const itemsArray = [...this.props.items]
    const verifiedArray = itemsArray.filter((item) => item.verified === true)
    
    verifiedArray.sort(function (a, b) {
      return b.searches - a.searches;
    });
    const topSix = verifiedArray.slice(0, 6)

    return topSix.map((item) => {
      return <VerifiedItemCard item={item} />
    })
  }

    render() {
      return (
        <div className="Main">
          <h2>top searched items</h2>
          {this.renderCards()}
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {items: state.items, searchItem: state.searchItem}
  }

export default connect(mapStateToProps)(TopSearchesContainer)
