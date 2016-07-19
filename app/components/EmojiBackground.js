require('../stylesheets/emoji_background');

var React = require('react');
var foodEmojis = [
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
];

var EmojiBackground = React.createClass({
  getInitialState: function() {
    return {
      initialEmoji: '',
      emojiInterval: null,
    }
  },

  componentWillMount: function() {
    var initialEmoji = this.getRandomFoodEmoji();
    var emojiInterval = this.setupEmojiInterval();

    this.setState({
      initialEmoji: initialEmoji,
      emojiInterval: emojiInterval
    })
  },

  componentDidUpdate: function() {
    this.stopEmojiIntervalAfterFirstAPICall();
  },

  setupEmojiInterval: function() {
    var emojiInterval = setInterval(function() {
      var emojiSpan = document.getElementsByClassName('food-emoji')[0];
      var currentEmoji = emojiSpan.innerText;
      var randomEmoji = currentEmoji;

      while (currentEmoji === randomEmoji) {
        randomEmoji = this.getRandomFoodEmoji();
      }

      emojiSpan.classList.add('hidden');

      setTimeout(function() {
        emojiSpan.innerText = randomEmoji;
        emojiSpan.classList.remove('hidden');
      }, 400);
    }.bind(this), 3800);

    return emojiInterval;
  },

  stopEmojiIntervalAfterFirstAPICall: function() {
    this.props.firstAPICallFinished && clearInterval(this.state.emojiInterval);
  },

  getRandomFoodEmoji: function() {
    return foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
  },

  getInitialFoodEmoji: function() {
    return this.getRandomFoodEmoji();
  },

  render: function() {
    return (
      <div className="emoji-background"><span className="food-emoji">{this.state.initialEmoji}</span></div>
    )
  }
});

module.exports = EmojiBackground;
