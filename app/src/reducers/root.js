import {
  REQUEST,
  FAILURE,
  SUCCESS,
  REQUEST_INCIDENTS_FULFILLED,
  CHANGE_PAGE_NUMBER
} from '../constants'

const initState = {
  banner: 'Police department of Berlin',
  isLoading: false,
  hasError: false,
  totalRecords: 0,
  incidents: [],
  currentPage: 1
}

export default function root(state = initState, action) {
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case REQUEST_INCIDENTS_FULFILLED:
      return {
        ...nextState,
        incidents: action.payload.incidents,
        isLoading: false,
        totalRecords: action.payload.incidents.length
      }
    case REQUEST:
      return { ...nextState, isLoading: true }
    case FAILURE:
      return { ...nextState, hasError: true }
    case SUCCESS:
      return { ...nextState, isLoading: false }
    case CHANGE_PAGE_NUMBER:
      return { ...nextState, currentPage: action.payload }
    default:
      return state
  }
}
