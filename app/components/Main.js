require('../stylesheets/main');

var React = require('react');
var EmojiBackground = require('./EmojiBackground');
var FindContainer = require('./FindContainer');
var EstablishmentContainer = require('./EstablishmentContainer');
var EstablishmentAPI = require('../utils/EstablishmentAPI');

var Main = React.createClass({
  getInitialState: function() {
    return {
      userLocation: {lat: 0, lng: 0},
      radius: 805,
      establishment: {},
      loading: false,
      error: false,
      firstAPICallFinished: false,
    }
  },

  handleGetRandomEstablishment: function() {
    this.setState({loading: true});

    navigator.geolocation.getCurrentPosition(function(position) {
      EstablishmentAPI.getEstablishment(position.coords.latitude, position.coords.longitude, this.state.radius)
        .then(function(response) {
          if (response.establishment) {
            this.setState({
              userLocation: {lat: position.coords.latitude, lng: position.coords.longitude},
              establishment: response.establishment,
              loading: false,
              firstAPICallFinished: true,
            });
          } else {
            this.setState({
              error: true,
              loading: false
            });
          }
        }.bind(this));
    }.bind(this));
  },

  handleChangeRadius: function(radius) {
    this.setState({radius: radius});
  },

  render: function() {
    return (
      <div className="app-container">
        <EmojiBackground firstAPICallFinished={this.state.firstAPICallFinished} />
        <FindContainer
          getRandomEstablishment={this.handleGetRandomEstablishment}
          changeRadius={this.handleChangeRadius}
          radius={this.state.radius}
          loading={this.state.loading}
          firstAPICallFinished={this.state.firstAPICallFinished}
        />
        <EstablishmentContainer
          getRandomEstablishment={this.handleGetRandomEstablishment}
          userLocation={this.state.userLocation}
          establishment={this.state.establishment}
          radius={this.state.radius}
          loading={this.state.loading}
        />
      </div>
    )
  },
});

module.exports = Main;
