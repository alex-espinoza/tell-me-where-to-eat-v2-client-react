require('../stylesheets/tell_me_button');

var React = require('react');

var TellMeButton = React.createClass({
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
    var disabled = this.props.loading ? true : false;
    return (
      <button className="find-button" onClick={this.props.getRandomEstablishment} disabled={disabled}>{this.getButtonText()}</button>
    )
  }
});

module.exports = TellMeButton;
