require('../stylesheets/emoji_background')
import React from 'react'

const FOOD_EMOJIS = [
  '🍉',
  '🍍',
  '🍎',
  '🍓',
  '🍅',
  '🍆',
  '🌽',
  '🍞',
  '🍖',
  '🍗',
  '🍔',
  '🍟',
  '🍕',
  '🍳',
  '🍲',
  '🍱',
  '🍙',
  '🍚',
  '🍛',
  '🍜',
  '🍝',
  '🍠',
  '🍢',
  '🍣',
  '🍤',
  '🍥',
  '🍡',
  '🍦',
  '🍧',
  '🍨',
  '🍩',
  '🍪',
  '🎂',
  '🍰',
  '🍫',
  '🍮',
  '☕',
  '🍵',
  '🍶',
  '🍷',
  '🍸',
  '🍹',
  '🍺',
]

class EmojiBackground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialEmoji: '',
      emojiInterval: null,
    }
  }

  componentWillMount() {
    let initialEmoji = this.getRandomFoodEmoji()
    let emojiInterval = this.setupEmojiInterval()

    this.setState({
      initialEmoji: initialEmoji,
      emojiInterval: emojiInterval
    })
  }

  componentDidUpdate() {
    this.stopEmojiIntervalAfterFirstAPICall()
  }

  setupEmojiInterval() {
    let emojiInterval = setInterval(() => {
      var emojiSpan = document.getElementsByClassName('food-emoji')[0]
      var currentEmoji = emojiSpan.innerText
      var randomEmoji = currentEmoji

      while (currentEmoji === randomEmoji) {
        randomEmoji = this.getRandomFoodEmoji()
      }

      emojiSpan.classList.add('hidden')

      setTimeout(() => {
        emojiSpan.innerText = randomEmoji
        emojiSpan.classList.remove('hidden')
      }, 400)
    }, 3800)

    return emojiInterval
  }

  stopEmojiIntervalAfterFirstAPICall() {
    this.props.firstAPICallFinished && clearInterval(this.state.emojiInterval)
  }

  getRandomFoodEmoji() {
    return FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)]
  }

  getInitialFoodEmoji() {
    return this.getRandomFoodEmoji()
  }

  render() {
    return (
      <div className="emoji-background"><span className="food-emoji">{this.state.initialEmoji}</span></div>
    )
  }
}

export default EmojiBackground
