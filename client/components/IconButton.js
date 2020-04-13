import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import SvgIcon from '@material-ui/core/SvgIcon'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: '100%'
  },
  button2: {
    margin: theme.spacing(1)
  }
}))

function DrawIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M-360.1,305.2c-0.6,0.2-1.3,0.4-1.9,0.7c-3.7,1.3-7.4,2.6-11.1,4c-0.9,0.3-1.9,0.5-2.8,0.2c-0.6-0.2-1.1-0.6-1.5-1
	c-1.7-1.5-3.4-2.9-5.1-4.3c0,0.3-0.1,0.5,0.1,0.8c0,0,0.1,0.1,0.2,0.2c1,0.8,1.9,1.6,2.9,2.4c0.9,0.8,1.8,1.6,2.8,2.3
	c1,0.6,2.2,0.4,3.3,0.1c1.1-0.4,2.2-0.8,3.4-1.2c2.4-0.9,4.9-1.7,7.3-2.6c0.4-0.1,0.8-0.3,1.1-0.4c0.6-0.2,1.2-0.3,1.7-0.6l0.1-0.1
	V305C-359.7,305.1-359.9,305.2-360.1,305.2z"
      />
      <path
        d="M-360.1,307c-0.6,0.2-1.3,0.4-1.9,0.7c-3.7,1.3-7.4,2.6-11.1,4c-0.9,0.2-1.9,0.4-2.8,0.1c-0.6-0.2-1.1-0.6-1.5-1
	c-1.7-1.4-3.4-2.8-5.1-4.3c0,0.3-0.1,0.5,0.1,0.8c0.1,0.1,0.1,0.2,0.2,0.2c1,0.8,1.9,1.6,2.9,2.4c0.9,0.8,1.8,1.6,2.8,2.3
	c1,0.6,2.2,0.4,3.3,0.1c1.1-0.4,2.2-0.8,3.4-1.2c2.4-0.9,4.9-1.7,7.3-2.6c0.4-0.1,0.8-0.3,1.1-0.4c0.6-0.2,1.2-0.3,1.7-0.6l0.1-0.1
	v-0.7C-359.7,306.8-359.9,306.9-360.1,307z"
      />
      <path
        d="M-360.1,308.7c-0.6,0.2-1.3,0.4-1.9,0.7c-3.7,1.3-7.4,2.6-11.1,4c-0.9,0.2-1.9,0.4-2.8,0.1c-0.6-0.2-1.1-0.6-1.5-1
	c-1.7-1.4-3.4-2.8-5.1-4.3c0,0.3-0.1,0.5,0.1,0.8c0.1,0.1,0.1,0.2,0.2,0.2c1,0.8,1.9,1.6,2.9,2.4c0.9,0.8,1.8,1.6,2.8,2.3
	c1,0.6,2.2,0.4,3.3,0.1c1.1-0.4,2.2-0.8,3.4-1.2c2.4-0.9,4.9-1.7,7.3-2.6c0.4-0.1,0.8-0.3,1.1-0.4c0.6-0.2,1.2-0.3,1.7-0.6l0.1-0.1
	v-0.7C-359.7,308.5-359.9,308.6-360.1,308.7z"
      />
      <path
        d="M-360.1,310.3c-0.6,0.2-1.3,0.4-1.9,0.7c-3.7,1.3-7.4,2.6-11.1,4c-0.9,0.2-1.9,0.4-2.8,0.1c-0.6-0.2-1.1-0.6-1.5-1
	c-1.7-1.4-3.4-2.8-5.1-4.3c0,0.3-0.1,0.5,0.1,0.8c0.1,0.1,0.1,0.2,0.2,0.2c1,0.8,1.9,1.6,2.9,2.4c0.9,0.8,1.8,1.6,2.8,2.3
	c1,0.6,2.2,0.4,3.3,0.1c1.1-0.4,2.2-0.8,3.4-1.2c2.4-0.9,4.9-1.7,7.3-2.6c0.4-0.1,0.8-0.3,1.1-0.4c0.6-0.2,1.2-0.3,1.7-0.6l0.1-0.1
	V310C-359.7,310.2-359.9,310.2-360.1,310.3z"
      />
      <path
        d="M-365.7,295.6c0-0.1-5-5.1-5-5.1c-0.4-0.4-1-0.4-1.4,0l-5.1,5.1h3c0,0.1-0.1,0.2-0.1,0.3v5c0,0.6,0.4,1,1,1h3.8
	c0.5,0,1-0.4,1-1v-5c0-0.1,0-0.2-0.1-0.3H-365.7z"
      />
      <g>
        <path
          d="M-359.8,299.7c-0.1-0.2-4-3.9-6.1-5.1l1.2,1.4h-1.1h-2.4v4.8c0,0.8-0.7,1.5-1.5,1.5h-3.8c-0.8,0-1.5-0.7-1.5-1.5v-4.2
		c-3.5,1.2-7.2,2.5-7.3,2.6c-0.2,0.2-0.4,0.4-0.4,0.6c-0.1,0.3,0,0.5,0.1,0.7c0.1,0.1,5.3,4.4,5.9,5c0.7,0.6,1.7,0.6,2.3,0.4
		c2.1-0.5,10.7-3.8,13-4.5c0.5-0.2,1.4-0.4,1.6-1C-359.5,300.2-359.7,299.9-359.8,299.7z"
        />
      </g>
      <g>
        <path
          d="M-361,302c0,0-0.1,0-0.1,0c-0.9,0.3-3,1-5.2,1.8c-3.2,1.2-6.6,2.4-7.8,2.7c-0.3,0.1-0.6,0.1-0.9,0.1
		c-0.7,0-1.4-0.2-1.9-0.7c-0.4-0.4-2.8-2.4-4.3-3.7c-0.6,0.2-0.9,0.3-0.9,0.4c-0.2,0.2-0.4,0.4-0.4,0.6c-0.1,0.3,0,0.5,0.1,0.7
		c0.1,0.1,5.3,4.4,5.9,5c0.7,0.6,1.7,0.6,2.3,0.4c2.1-0.5,10.7-3.8,13-4.5c0.5-0.2,1.4-0.4,1.6-1c0.1-0.3-0.1-0.6-0.2-0.8
		C-359.8,303-360.3,302.6-361,302z"
        />
      </g>
    </SvgIcon>
  )
}

export function MyIconButton(props) {
  const classes = useStyles()
  if (props.text === 'BUY') {
    return (
      <Button
        onClick={() => props.handleClick(props.card._id, props.card.cost)}
        variant="contained"
        className={classes.button}
        startIcon={<ControlPointIcon />}
      >
        {props.text}
      </Button>
    )
  } else if (props.text === 'deleteFromDeck') {
    return (
      <Button
        onClick={props.handleRemove}
        variant="contained"
        className={classes.button2}
        startIcon={<DeleteIcon />}
      >
        DELETE
      </Button>
    )
  } else if (props.text === 'deleteDeck') {
    return (
      <IconButton
        classes={classes.button2}
        onClick={() =>
          confirmAlert({
            title: 'Confirm',
            message: 'Are you sure you want to permanently delete this deck?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                  props.removeCollection(props.collection._id)
                  props.handleChangeState(props.collection._id.toString())
                }
              },
              {
                label: 'Cancel'
              }
            ]
          })
        }
        sizesmall
      >
        <DeleteIcon />
      </IconButton>
    )
  } else if (props.text === 'canDraw') {
    return (
      <IconButton
        classes={classes.button1}
        onClick={() =>
          this.props.drawCard(this.props.player.deck, this.props.user)
        }
      >
        <DrawIcon />
      </IconButton>
    )
  } else if (props.text === 'cantDraw') {
    return (
      <IconButton
        classes={classes.button1}
        disabled
        onClick={() =>
          this.props.drawCard(this.props.player.deck, this.props.user)
        }
      >
        <DrawIcon />
      </IconButton>
    )
  } else if (props.text === 'endTurn') {
    return (
      <IconButton
        classes={classes.button1}
        onClick={() => {
          this.props.endTurn(
            this.props.gameId,
            this.props.gameState,
            this.props.player,
            this.props.user
          )

          window.KEY = Math.random()
        }}
      />
    )
  }
}
