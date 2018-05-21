require('../stylesheets/find_container')
import React from 'react'
import TellMeButton from './TellMeButton'

class FindContainer extends React.Component {
  getFindContainerClasses() {
    let containerClass = 'find-container'
    var visible = this.props.firstAPICallFinished ? ' hidden' : ''
    return containerClass + visible
  }

  render() {
    return (
      <div className={this.getFindContainerClasses()}>
        <div className="find-content">
          <div className="description">
            <span>Find a restaurant within a</span>
            <select name="radius-select" value={this.props.radius} onChange={(event) => this.props.changeRadius(event.target.value)}>
              <option value="403">¼ mile radius</option>
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
          <div className="sidenote">
            <p>Results will be more accurate on a wireless or mobile connection.</p>
            <p>Created by <a href="https://alex.aspria.net/">Alex Espinoza</a>.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FindContainer
