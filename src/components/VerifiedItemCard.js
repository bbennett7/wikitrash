import React, { Component } from 'react';

export default class VerifiedItemCard extends Component {

  locationList = () => {
    let locationsArray = this.props.item.locations.split("; ");
    let locationsMap = locationsArray.map((location) => {
      return <li>{location}</li>
    })

    if (locationsArray[0] === "") {
      return <li>None</li>
    } else {
      return locationsMap
    }
  }

  referenceList = () => {
    let referencesArray = this.props.item.references.split("; ");
    let referencesMap = referencesArray.map((reference) => {
      return <li><a href={reference} target="blank">{reference}</a></li>
    })

    if (referencesArray[0] === "") {
      return <li>None</li>
    } else {
      return referencesMap
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
      <div className="Verified-card">
        <h4 className="Title">{this.props.item.name}</h4>
        <img src={this.props.item.image} alt={this.props.item.name} height="60vh" width="60vh"/>

        <ul>
          <li><strong>Recyclable:</strong> {this.recyclable()}</li>
          <li><strong>Rules:</strong> {this.props.item.rules}</li>
          <li><strong>Where to recycle:</strong> {this.locationList()}</li>
          <li><strong>References:</strong> {this.referenceList()}</li>
        </ul>
      </div>
    )
  }
}
