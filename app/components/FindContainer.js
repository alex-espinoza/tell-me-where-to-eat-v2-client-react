require('../stylesheets/find_container');

var React = require('react');
var TellMeButton = require('./TellMeButton');

var FindContainer = React.createClass({
  getFindContainerClasses: function() {
    var containerClass = 'find-container';
    var visible = this.props.firstAPICallFinished ? ' hidden' : '';
    return containerClass + visible;
  },

  changeRadius: function(event) {
    this.props.changeRadius(event.target.value);
  },

  render: function() {
    return (
      <div className={this.getFindContainerClasses()}>
        <div className="find-content">
          <div className="description">
            <span>Find a restaurant within a</span>
            <select name="radius-select" value={this.props.radius} onChange={this.changeRadius}>
              <option value="805">½ mile radius</option>
              <option value="1610">1 mile radius</option>
              <option value="3219">2 mile radius</option>
            </select>
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
