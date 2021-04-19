import { CHANGE_STATUS, GET_TOPICS } from "../types/topicsTypes";


const topicsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOPICS:
      return action.payload

    case CHANGE_STATUS:
      return

    default:
      return state
  }
}

export default topicsReducer
