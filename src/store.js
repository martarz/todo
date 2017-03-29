import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import tasksReducer from './state/tasks'

const reducer = ({
  task: tasksReducer,
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