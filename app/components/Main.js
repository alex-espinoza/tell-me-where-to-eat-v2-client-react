var React = require('react');
var FindContainer = require('./FindContainer');
var EstablishmentContainer = require('./EstablishmentContainer');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <FindContainer />
        <EstablishmentContainer />
      </div>
    )
  },
});

module.exports = Main;
