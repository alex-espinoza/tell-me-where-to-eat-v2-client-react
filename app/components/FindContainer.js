var React = require('react');

var FindContainer = React.createClass({
  getInitialState: function() {
    return {
      defaultButtonText: 'Tell Me Where To Eat',
      loadingButtonText: [
        'Hold on...',
        'Sit tight...',
        'One sec...',
        'Looking around...',
        'Searching...',
        'Finding restaurant...',
        'Hmm...',
        "Let's see...",
        'How about...',
        "I'll find you something nice...",
        'I gotchu...',
      ]
    }
  },

  getButtonText: function() {
    if (this.props.loading) {
      return this.state.loadingButtonText[Math.floor(Math.random() * this.state.loadingButtonText.length)];
    } else {
      return this.state.defaultButtonText;
    }
  },

  render: function() {
    return (
      <div className="find-container">
        <div className="description">
          <span>Find a restaurant within a</span>
          <span>1 mile radius</span>
          <span>of my current location</span>
        </div>
        <button onClick={this.props.getRandomEstablishment}>{this.getButtonText()}</button>
      </div>
    )
  }
});

module.exports = FindContainer;
