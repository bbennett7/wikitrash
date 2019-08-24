import React, { Component } from 'react';

class UnverifiedItemCard extends Component {

  handleUpVote = (event) => {
    console.log(this.props)
    this.props.upVoteItem(this.props.item)
    this.props.updateContainer()
  }

  handleDownVote = (event) => {
    this.props.downVoteItem(this.props.item)
    this.props.updateContainer()
  }

  locationList = () => {
    let locationsArray = this.props.item.locations.split("; ");

    if (locationsArray[0] === "") {
      return <li>None</li>
    } else {
      return locationsArray.map((location) => {
        return <li>{location}</li>
      })
    }
  }

  referenceList = () => {
    let referencesArray = this.props.item.references.split("; ");

    if (referencesArray[0] === "") {
      return <li>None</li>
    } else {
      return referencesArray.map((reference) => {
        return <li><a href={reference} target="blank">{reference}</a></li>
      })
    }
  }

  recyclable = () => {
    if (this.props.item.recyclable === true) {
      return "Yes"
    } else {
      return "No"
    }
  }

  render() {
    return (
      <div className="Unverified-card">
        <h4 className="Title">{this.props.item.name}</h4>
        <img src={this.props.item.image} alt={this.props.item.name} height="60vh" width="60vh"/>
        <ul>
          <li><strong>Recyclable:</strong> {this.recyclable()}</li>
          <li><strong>Rules:</strong> {this.props.item.rules}</li>
          <li><strong>Where to recycle:</strong> <ul> {this.locationList()} </ul></li>
          <li className="Reference"><strong>References:</strong> <ol> {this.referenceList()} </ol> </li>
          <br /> <br />
          <p>Is this information accurate?</p>
          <button onClick={this.handleDownVote} className="Downvote">No</button>
          <button onClick={this.handleUpVote} className="Upvote">Yes</button>
        </ul>
      </div>
    )
  }
}

export default UnverifiedItemCard
