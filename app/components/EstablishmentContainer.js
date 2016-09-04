require('../stylesheets/establishment_container')
import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker, OverlayView} from 'react-google-maps'
import TellMeButton from './TellMeButton'

class EstablishmentContainer extends React.Component {
  getEstablishmentContainerClasses() {
    let containerClass = 'establishment-container'
    var visible = this.props.establishment.hasOwnProperty('name') ? ' visible' : ''
    return containerClass + visible
  }

  getEstablishmentCoordinates() {
    if (this.props.establishment.hasOwnProperty('name')) {
      return {lat: this.props.establishment.coordinates[0], lng: this.props.establishment.coordinates[1]}
    }
    else {
      return {lat: 0, lng: 0}
    }
  }

  getZoomFromRadius() {
    return this.props.radius > 805 ? 15 : 16
  }

  render() {
    return (
      <div className={this.getEstablishmentContainerClasses()}>
        <GoogleMapLoader
          query={{ libraries: 'geometry,drawing,places,visualization' }}
          containerElement={
            <div className='map' />
          }
          googleMapElement={
            <GoogleMap
              zoom={this.getZoomFromRadius()}
              center={this.getEstablishmentCoordinates()}>
              <Marker position={this.getEstablishmentCoordinates()} />
              <OverlayView
                position={this.props.userLocation}
                mapPaneName={OverlayView.OVERLAY_LAYER}
                getPixelPositionOffset={this.getPixelPositionOffset}
              >
                <div className="user-location-marker">
                  <div className="user-location-pulse" />
                </div>
              </OverlayView>
            </GoogleMap>
          }
        />
        <div className="information-container">
          <div className="information">
            <h1>{this.props.establishment.name}</h1>
            <p>{this.props.establishment.categories}</p>
            <p>{this.props.establishment.address && this.props.establishment.address.join(' ')}</p>
            <a href={`tel:${this.props.establishment.phone_number}`}>{this.props.establishment.phone_number}</a>
            <a href={this.props.establishment.url} target="_blank">Visit Yelp Page</a>
          </div>
          <div className="button-container">
            <TellMeButton
              getRandomEstablishment={this.props.getRandomEstablishment}
              loading={this.props.loading}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EstablishmentContainer
