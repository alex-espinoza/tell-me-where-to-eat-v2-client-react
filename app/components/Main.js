var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <div className="description">
          <span>Find a restaurant within a</span>
          <span>1 mile radius</span>
          <span>of my current location</span>
        </div>
        <button>Tell Me Where To Eat</button>
      </div>
    )
  },
});

module.exports = Main;
