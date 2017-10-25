import createStore from 'redux-zero'

const DATE = [
  {
     name: 'kaljdi',
     text : 'jaidji------'
  },
]

const initialState = {
  date : DATE,
  moreComent : -1
}

const store = createStore (initialState)
export default store