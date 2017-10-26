import createStore from 'redux-zero'

const DATE = [
  {
    id :1,
     name: 'esther',
     text : 'jaidji------'
  },
  {
    id :2,
    name: 'esthppper',
    text : 'jaidji------'
 },
]

const initialState = {
  date : DATE,
  moreComent : -1
}

const store = createStore (initialState)
export default store