import { GET_TOPICS, GET_QUESTION, SET_USER, CHANGE_POINTS, REMOVE_USER } from "../types/topicsTypes"

export const getTopicsFromServer = (topics) => {
  return {
    type: GET_TOPICS,
    payload: topics
  }
}

// export const checkAnswer = (data) => {
//   return {
//     type: CHECK_ANSWER,
//     payload: data
//   }
// }

export const setUser = (name) => {
  return {
    type: SET_USER,
    payload: name
  }
}

export const changePoints = (data) => {
  return {
    type: CHANGE_POINTS,
    payload: data
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  }
}

