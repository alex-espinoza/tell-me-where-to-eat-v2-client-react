var React = require('react');
var FindContainer = require('./FindContainer');
var EstablishmentContainer = require('./EstablishmentContainer');
var EstablishmentAPI = require('../utils/EstablishmentAPI');

var Main = React.createClass({
  getInitialState: function() {
    return {
      establishment: {},
    }
  },

  handleGetRandomEstablishment: function() {
    EstablishmentAPI.getEstablishment()
      .then(function(response) {
        console.log(response);
      });
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
