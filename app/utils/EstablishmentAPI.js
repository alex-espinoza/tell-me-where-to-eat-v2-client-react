var axios = require('axios');

var EstablishmentAPI = {
  getEstablishment: function() {
    return axios.get('https://tell-me-where-to-eat-v2-rails.herokuapp.com/api/establishments/find')
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        return error;
      });
  }
}

module.exports = EstablishmentAPI;
