require('../stylesheets/tell_me_button')
import React from 'react'

class TellMeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
        'Another one...'
      ]
    }
  }

  getButtonText() {
    if (this.props.loading) {
      return this.state.loadingButtonText[Math.floor(Math.random() * this.state.loadingButtonText.length)]
    }
    else {
      return this.state.defaultButtonText
    }
  }

  render() {
    var disabled = this.props.loading ? true : false
    return (
      <button className="find-button" onMouseUp={() => this.props.getRandomEstablishment()} onTouchEnd={() => this.props.getRandomEstablishment()} disabled={disabled}>{this.getButtonText()}</button>
    )
  }
}

export default TellMeButton
