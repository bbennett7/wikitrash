import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { fetchItems } from './actions/items'
import RecyclingSymbol from './images/RecyclingSymbol.jpg'

class App extends Component {

  componentDidMount() {
    console.log("a")
    this.props.fetchItems()
    console.log("b")
    // a, c, d, b, e
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="Header">WikiTr <img className="R-symbol" src={RecyclingSymbol} height="50px" width="50px" alt="recycling symbol as the letter A" /> sh</span>
          <p>Your source for the responsible disposal of all materials.</p>
        </header>
        <NavBar />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {items: state.items}
}

export default connect(mapStateToProps, {fetchItems})(App);
