import { INewState, SerialActionType } from "./interfaces"
import { ADD_NEW_SERIAL, GET_SERIALS, PUT_CHANGE_RAITING, GET_USERS_SERIALS, GET_CURRENT_SERIAL } from "./types"

const initialState: INewState = {
	user: null,
	serials: [],
	currentSerial: null
}

export const serialsAddReducer = (
	state = initialState,
	action: SerialActionType
): INewState => {
	switch (action.type) {
		case ADD_NEW_SERIAL: {
			return { ...state, serials: [...state.serials, action.payload] }
		}
		case GET_SERIALS: {
			return { ...state, serials: action.payload }
		}
		case GET_CURRENT_SERIAL: {
			return { ...state, currentSerial: action.payload }
		}
		case PUT_CHANGE_RAITING: {
			return { ...state, user: action.payload } 
		}
		case GET_USERS_SERIALS: {
			return { ...state, user: action.payload }
		}
		default:
			return state
	}
}
