import React, {Component} from 'react'
import Side from './Side'
import {DndProvider} from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import {connect} from 'react-redux'
import {
  getAllCards,
  loadGame,
  saveGame,
  startTurn,
  clearBoard,
  giveGold
} from '../store/thunksAndActionCreators'
import {socket} from './Room'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//used for slightly delaying socket speed prior to save.
const STUTTER = 350
window.KEY = Math.random()

class Board extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    if (!localStorage.gameId) {
      localStorage.gameId = this.props.match.params.id
      localStorage.roomId = this.props.match.params.roomId
      localStorage.playerId = this.props.playerId
    }

    socket.emit('join', {
      roomId: this.props.match.params.roomId
    })

    socket.emit('player joined', {
      playerName: this.props.playerName,
      roomId: this.props.match.params.roomId
    })

    socket.on('play card', () => {
      setTimeout(
        function() {
          this.props.loadGame(this.props.match.params.id)
        }.bind(this),
        STUTTER
      )
    })

    socket.on('left game', data => {
      toast.info(`${data.playerName} has left the game`, {
        position: toast.POSITION.TOP_CENTER
      })
    })

    socket.on('player joined', data => {
      toast.info(`${data.playerName} has entered the game`, {
        position: toast.POSITION.TOP_CENTER
      })
    })

    socket.on('end turn', () => {
      setTimeout(
        function() {
          this.props.loadGame(this.props.match.params.id)
        }.bind(this),
        STUTTER
      )

      toast.info("It's your turn!", {
        position: toast.POSITION.TOP_CENTER
      })
    })

    socket.on('game over', data => {
      setTimeout(
        async function() {
          await this.props.loadGame(this.props.match.params.id)

          const gold =
            (data === 'player' && this.props.isMyTurn) ||
            (data === 'opponent' && !this.props.isMyTurn)
              ? 3
              : 1

          this.props.giveGold(gold)

          toast.info("You've earned " + gold + ' gold!', {
            position: toast.POSITION.TOP_RIGHT
          })
        }.bind(this),
        STUTTER
      )

      delete localStorage.gameId
      delete localStorage.roomId
      delete localStorage.playerId
    })

    socket.on('hero attacked', () => {
      setTimeout(
        function() {
          this.props.loadGame(this.props.match.params.id)
        }.bind(this),
        STUTTER
      )
    })

    socket.on('attack', () => {
      setTimeout(
        function() {
          this.props.loadGame(this.props.match.params.id)
        }.bind(this),
        STUTTER
      )
    })

    socket.on('draw card', () => {
      setTimeout(
        function() {
          this.props.loadGame(this.props.match.params.id)
        }.bind(this),
        STUTTER
      )
    })

    this.props.loadGame(this.props.match.params.id)
  }

  async componentDidUpdate() {
    if (this.props.canEnd) {
      await this.props.saveGame(
        this.props.match.params.id,
        this.props.gameState
      )
    }
  }

  componentWillUnmount() {
    socket.removeAllListeners()
    this.props.clearBoard()
  }

  render() {
    return (
      <DndProvider backend={Backend}>
        <div className="board">
          <div className="container">
            <Side top={true} />
            <Side gameId={this.props.match.params.id} />
          </div>
        </div>
      </DndProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    id: state.user._id,
    cards: state.game.cards,
    inPlay: state.game.player.inPlay,
    gameState: state.game,
    isMyTurn: state.game.data.localTurn,
    canEnd: state.game.data.isMyTurn,
    player: state.game.player,
    playerName: state.user.userName,
    playerId: state.user._id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCards: () => dispatch(getAllCards()),
    giveGold: amt => dispatch(giveGold(amt)),
    loadGame: id => dispatch(loadGame(id)),
    saveGame: (id, gameState) => dispatch(saveGame(id, gameState)),
    startTurn: () => dispatch(startTurn()),
    clearBoard: () => dispatch(clearBoard())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Board))
