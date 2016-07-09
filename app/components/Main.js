var React = require('react');
var FindContainer = require('./FindContainer');
var EstablishmentContainer = require('./EstablishmentContainer');

var Main = React.createClass({
  getInitialState: function() {
    return {
      establishment: {},
    }
  },

  handleGetRandomEstablishment: function() {
    console.log('server call with geolocation data goes here');
  },

  render: function() {
    return (
      <div>
        <FindContainer
          getRandomEstablishment={this.handleGetRandomEstablishment}
        />
        <EstablishmentContainer
          establishment={this.state.establishment}
        />
      </div>
    )
  },
});

module.exports = Main;
