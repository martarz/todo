import { createStore } from 'redux'
import thunk from 'redux-thunk'

import noteReducer from './state/notes'

const reducer = ({
  note: noteReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    persistState(['counter']),
    applyMiddleware(thunk)
  )
);

export default store