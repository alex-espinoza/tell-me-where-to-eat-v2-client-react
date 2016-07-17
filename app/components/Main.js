require('../stylesheets/main');

var React = require('react');
var FindContainer = require('./FindContainer');
var EstablishmentContainer = require('./EstablishmentContainer');
var EstablishmentAPI = require('../utils/EstablishmentAPI');

var Main = React.createClass({
  getInitialState: function() {
    return {
      establishment: {},
      loading: false,
      error: false,
      firstAPICallFinished: false,
      foodEmojis: [
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
      ],
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
    this.state.firstAPICallFinished && clearInterval(this.state.emojiInterval);
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

  getRandomFoodEmoji: function() {
    return this.state.foodEmojis[Math.floor(Math.random() * this.state.foodEmojis.length)];
  },

  getInitialFoodEmoji: function() {
    return this.getRandomFoodEmoji();
  },

  handleGetRandomEstablishment: function() {
    this.setState({loading: true});

    EstablishmentAPI.getEstablishment()
      .then(function(response) {
        if (response.establishment) {
          console.log(response.establishment);
          this.setState({
            establishment: response.establishment,
            loading: false,
            firstAPICallFinished: true
          });
        } else {
          console.log(response);
          this.setState({
            error: true,
            loading: false
          });
        }
      }.bind(this));
  },

  render: function() {
    return (
      <div>
        <div className="emoji-background"><span className="food-emoji">{this.state.initialEmoji}</span></div>
        <FindContainer
          getRandomEstablishment={this.handleGetRandomEstablishment}
          loading={this.state.loading}
          firstAPICallFinished={this.state.firstAPICallFinished}
        />
        <EstablishmentContainer
          getRandomEstablishment={this.handleGetRandomEstablishment}
          loading={this.state.loading}
          establishment={this.state.establishment}
        />
      </div>
    )
  },
});

module.exports = Main;
