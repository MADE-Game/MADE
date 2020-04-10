import {
  PLAYER_ATTACK_CARD,
  PLAYER_ATTACK_HERO,
  LOAD_GAME,
  END_TURN,
  CLEAR_BOARD,
  BANDIT_DECREMENT
} from '../actionTypes'

const initialState = {
  deck: 0,
  inPlay: [],
  hand: 0,
  settlers: 30,
  class: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_GAME:
      console.log(action)
      return {
        ...state,
        inPlay: action.game.game.opponent.inPlay,
        hand: action.game.game.opponent.hand,
        deck: action.game.game.opponent.deck,
        settlers: action.game.game.opponent.settlers,
        class: action.game.game.opponent.class
      }
    case CLEAR_BOARD:
      return initialState
    case PLAYER_ATTACK_CARD:
      return {
        ...state,
        inPlay: state.inPlay
          .filter(card => card.health > 0)
          .map(card => {
            if (card.id === action.defender._id) {
              return action.defender
            } else {
              return card
            }
          })
      }
    case PLAYER_ATTACK_HERO:
      return {...state, settlers: action.hero.settlers}
    case END_TURN:
      return {
        ...state,
        inPlay: state.inPlay.map(function(card) {
          card.attackOccurred = false
          return card
        }),
        drawOccurred: 0
      }
    case BANDIT_DECREMENT:
      return {...state, settlers: action.opponent.settlers}

    default:
      return state
  }
}
