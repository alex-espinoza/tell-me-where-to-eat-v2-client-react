var axios = require('axios');

var endpointUrl = 'https://tell-me-where-to-eat-v2-rails.herokuapp.com/api/establishments/find';

var EstablishmentAPI = {
  getEstablishment: function(latitude, longitude, radius) {
    var url = endpointUrl + '?latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius;

    return axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        return error;
      });
  }
}

module.exports = EstablishmentAPI;
