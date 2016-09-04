require('../stylesheets/main')
import React from 'react'
import EmojiBackground from './EmojiBackground'
import FindContainer from './FindContainer'
import EstablishmentContainer from './EstablishmentContainer'
import EstablishmentAPI from '../utils/EstablishmentAPI'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userLocation: {lat: 0, lng: 0},
      radius: 403,
      establishment: {},
      loading: false,
      error: false,
      firstAPICallFinished: false,
    }
  }

  handleGetRandomEstablishment() {
    this.setState({loading: true})

    navigator.geolocation.getCurrentPosition((position) => {
      EstablishmentAPI.getEstablishment(position.coords.latitude, position.coords.longitude, this.state.radius)
        .then((response) => {
          if (response.establishment) {
            this.setState({
              userLocation: {lat: position.coords.latitude, lng: position.coords.longitude},
              establishment: response.establishment,
              loading: false,
              firstAPICallFinished: true,
            })
          }
          else {
            this.setState({
              error: true,
              loading: false
            })
          }
        })
    })
  }

  handleChangeRadius(radius) {
    this.setState({radius: radius})
  }

  render() {
    return (
      <div className="app-container">
        <EmojiBackground firstAPICallFinished={this.state.firstAPICallFinished} />
        <FindContainer
          getRandomEstablishment={() => this.handleGetRandomEstablishment()}
          changeRadius={(radius) => this.handleChangeRadius(radius)}
          radius={this.state.radius}
          loading={this.state.loading}
          firstAPICallFinished={this.state.firstAPICallFinished}
        />
        <EstablishmentContainer
          getRandomEstablishment={() => this.handleGetRandomEstablishment()}
          userLocation={this.state.userLocation}
          establishment={this.state.establishment}
          radius={this.state.radius}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default Main
