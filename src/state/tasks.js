const FETCH__BEGIN = 'tasks/FETCH__BEGIN'
const FETCH__SUCCESS = 'tasks/FETCH__SUCCESS'
const FETCH__FAIL = 'tasks/FETCH__FAILED'

const SAVE_TASK = 'tasks/SAVE_TASK'

export const fetchTasks = () => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    process.env.PUBLIC_URL + '/data/tasks.json'
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => dispatch({
            type: FETCH__SUCCESS,
            data
          })
        ).catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Malformed JSON response'
          })
        )
      }
      throw new Error('Connection error')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

export const saveTask= (title, description, status, date) => ({
  type: SAVE_TASK,
  title, description, status, date
})


const initialState = {
 data: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCH__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    case SAVE_TASK:
      return {
        ...state,
        data: state.data.concat({
          title: state.data.map(task => task.title).reduce((prev, next) => prev > next ? prev : next, -Infinity) + 1,
          description: action.description,
          surname: action.surname,
          status: action.status,
          date: action.date,
        })
      }
    default:
      return state
  }
}