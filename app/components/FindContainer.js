var React = require('react');

var FindContainer = React.createClass({
  render: function() {
    return (
      <div className="find-container">
        <div className="description">
          <span>Find a restaurant within a</span>
          <span>1 mile radius</span>
          <span>of my current location</span>
        </div>
        <button onClick={this.props.getRandomEstablishment}>Tell Me Where To Eat</button>
      </div>
    )
  }
});

module.exports = FindContainer;
