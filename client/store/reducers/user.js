import axios from 'axios'
import history from '../../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ALL_COLLECTIONS_FOR_USER = 'ALL_COLLECTIONS_FOR_USER'
const GET_COLLECTION = 'GET_COLLECTION'
const CREATE_DECK = 'CREATE_DECK'
const EDIT_COLLECTION = 'EDIT_COLLECTION'
const SELECT_DECK = 'SELECT_DECK'

/**
 * INITIAL STATE
 */
const initialState = {
  collections: [],
  selectedCollection: {
    cards: [],
    name: '',
    _id: ''
  },
  defaultUser: {},
  selectedDeck: {}
}
/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

const gotAllCollections = collections => ({
  type: ALL_COLLECTIONS_FOR_USER,
  collections
})
const gotCollection = collection => ({
  type: GET_COLLECTION,
  collection
})

const createdDeck = deck => ({
  type: CREATE_DECK,
  deck
})
const editedCollection = collection => ({
  type: EDIT_COLLECTION,
  collection
})
const selectedDeck = deck => ({
  type: SELECT_DECK,
  deck
})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || initialState.defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method, userName) => async dispatch => {
  let res
  try {
    const collections = []
    res = await axios.post(`/auth/${method}`, {
      email,
      password,
      userName,
      collections
    })
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }
  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const getAllUserCollections = userId => {
  return async dispatch => {
    const {data: collections} = await axios.get(
      `/api/users/${userId}/collections`
    )

    dispatch(gotAllCollections(collections))
  }
}
export const selectDeck = name => {
  return async dispatch => {
    const {data: deck} = await axios.put('/api/users/collections/selected', {
      name
    })
    dispatch(selectedDeck(deck))
  }
}

export const getCollection = collectionId => {
  return async dispatch => {
    const {data: collection} = await axios.get(
      `/api/collections/${collectionId}`
    )
    dispatch(gotCollection(collection))
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const addToCollection = (collection, cardId) => {
  return async dispatch => {
    try {
      const fullCollection = {
        ...collection,
        cards: [...collection.cards, cardId]
      }

      const {data: newCollection} = await axios.put(
        '/api/collections/' + collection._id,
        fullCollection
      )

      dispatch(editedCollection(newCollection))
    } catch (e) {
      console.error(e)
    }
  }
}
export const removeFromCollection = (collection, cardId) => {
  return async dispatch => {
    try {
      console.log('collection', collection)
      const fullCollection = {
        ...collection,
        cards: collection.cards.filter(card => card._id !== cardId)
      }

      const {data: newCollection} = await axios.put(
        '/api/collections/' + collection._id,
        fullCollection
      )

      dispatch(editedCollection(newCollection))
    } catch (e) {
      console.error(e)
    }
  }
}

export const createDeck = name => async dispatch => {
  try {
    const {data: deck} = await axios.post('/api/collections', {name})
    console.log('created dekc!', deck)
    dispatch(createdDeck(deck))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
// eslint-disable-next-line complexity
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, ...action.user}
    case REMOVE_USER:
      return initialState
    case EDIT_COLLECTION:
      return {
        ...state,
        collections: state.collections.map(coll =>
          coll._id === action.collection._id ? action.collection : coll
        ),
        selectedCollection:
          state.selectedCollection._id === action.collection._id
            ? action.collection
            : state.selectedCollection
      }
    case ALL_COLLECTIONS_FOR_USER:
      return {...state, collections: action.collections}
    case GET_COLLECTION:
      return {...state, selectedCollection: action.collection}
    case SELECT_DECK:
      return {...state, selectedDeck: action.deck._id}
    case CREATE_DECK:
      return {...state, collections: [...state.collections, action.deck]}
    default:
      return state
  }
}
