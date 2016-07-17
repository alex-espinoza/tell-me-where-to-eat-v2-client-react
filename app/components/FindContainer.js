var React = require('react');
var TellMeButton = require('./TellMeButton');

var FindContainer = React.createClass({
  getFindContainerClasses: function() {
    var containerClass = 'find-container';
    var visible = this.props.firstAPICallFinished ? ' hidden' : '';
    return containerClass + visible;
  },

  render: function() {
    return (
      <div className={this.getFindContainerClasses()}>
        <div className="find-content">
          <div className="description">
            <span>Find a restaurant within a</span>
            <span>1 mile radius</span>
            <span>of my current location</span>
          </div>
          <TellMeButton
            getRandomEstablishment={this.props.getRandomEstablishment}
            loading={this.props.loading}
          />
        </div>
      </div>
    )
  }
});

module.exports = FindContainer;
