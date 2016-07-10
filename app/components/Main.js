var React = require('react');
var FindContainer = require('./FindContainer');
var EstablishmentContainer = require('./EstablishmentContainer');
var EstablishmentAPI = require('../utils/EstablishmentAPI');

var Main = React.createClass({
  getInitialState: function() {
    return {
      establishment: {},
      loading: false,
      error: false,
    }
  },

  handleGetRandomEstablishment: function() {
    this.setState({loading: true});

    EstablishmentAPI.getEstablishment()
      .then(function(response) {
        if (response.establishment) {
          console.log(response.establishment);
          this.setState({
            establishment: response.establishment,
            loading: false
          });
        } else {
          console.log(response);
          this.setState({
            error: true,
            loading: false
          });
        }
      }.bind(this));
  },

  render: function() {
    return (
      <div>
        <FindContainer
          getRandomEstablishment={this.handleGetRandomEstablishment}
          loading={this.state.loading}
        />
        <EstablishmentContainer
          establishment={this.state.establishment}
        />
      </div>
    )
  },
});

module.exports = Main;
