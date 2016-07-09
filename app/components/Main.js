var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <div>Find a restaurant within a 1 mile radius of my current location</div>
        <div>{this.props.children}</div>
      </div>
    )
  },
});

module.exports = Main;
