var React = require('react');

var EstablishmentContainer = React.createClass({
  getEstablishmentContainerClasses: function() {
    var containerClass = 'establishment-container';
    var visible = this.props.establishment.hasOwnProperty('name') ? ' visible' : '';
    return containerClass + visible;
  },

  render: function() {
    return (
      <div className={this.getEstablishmentContainerClasses()}>
        <p>{this.props.establishment.name}</p>
        <p>{this.props.establishment.categories}</p>
        <p>{this.props.establishment.address && this.props.establishment.address.join(' ')}</p>
        <p>{this.props.establishment.phone_number}</p>
        <p>{this.props.establishment.url}</p>
      </div>
    )
  }
});

module.exports = EstablishmentContainer;
