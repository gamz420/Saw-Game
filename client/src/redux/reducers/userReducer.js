import { SET_USER, CHANGE_POINTS, REMOVE_USER } from "../types/topicsTypes";


const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                name: action.payload
            }

        case CHANGE_POINTS:
            if (action.payload.status) {
                return {
                    ...state,
                    points: state.points + action.payload.points
                }
            } else {
                return {
                    ...state,
                    points: state.points - action.payload.points
                }
            }

        case REMOVE_USER:
            return {
                name: '',
                points: 0,
            }

        default:
            return state
    }
}

export default userReducer
