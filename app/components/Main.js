require('../stylesheets/main');

var React = require('react');
var EmojiBackground = require('./EmojiBackground');
var FindContainer = require('./FindContainer');
var EstablishmentContainer = require('./EstablishmentContainer');
var EstablishmentAPI = require('../utils/EstablishmentAPI');

var Main = React.createClass({
  getInitialState: function() {
    return {
      establishment: {},
      loading: false,
      error: false,
      firstAPICallFinished: false,
    }
  },

  handleGetRandomEstablishment: function() {
    this.setState({loading: true});

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      EstablishmentAPI.getEstablishment(position.coords.latitude, position.coords.longitude)
        .then(function(response) {
          if (response.establishment) {
            console.log(response.establishment);
            this.setState({
              establishment: response.establishment,
              loading: false,
              firstAPICallFinished: true
            });
          } else {
            console.log(response);
            this.setState({
              error: true,
              loading: false
            });
          }
        }.bind(this));
    });
  },

  render: function() {
    return (
      <div className="app-container">
        <EmojiBackground firstAPICallFinished={this.state.firstAPICallFinished} />
        <FindContainer
          getRandomEstablishment={this.handleGetRandomEstablishment}
          loading={this.state.loading}
          firstAPICallFinished={this.state.firstAPICallFinished}
        />
        <EstablishmentContainer
          getRandomEstablishment={this.handleGetRandomEstablishment}
          loading={this.state.loading}
          establishment={this.state.establishment}
        />
      </div>
    )
  },
});

module.exports = Main;
