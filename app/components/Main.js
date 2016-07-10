var React = require('react');
var FindContainer = require('./FindContainer');
var EstablishmentContainer = require('./EstablishmentContainer');
var EstablishmentAPI = require('../utils/EstablishmentAPI');

var Main = React.createClass({
  getInitialState: function() {
    return {
      establishment: {},
      error: false
    }
  },

  handleGetRandomEstablishment: function() {
    EstablishmentAPI.getEstablishment()
      .then(function(response) {
        if (response.establishment) {
          console.log(response.establishment);
          this.setState({
            establishment: response.establishment
          })
        } else {
          console.log(response);
          this.setState({
            error: true
          })
        }
      }.bind(this));
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
