import axios from "axios";
import { Dispatch } from "react";
import { SerialActionType, INewSerialType, INewSerialForPostType, IUser } from "./interfaces";
import { ADD_NEW_SERIAL, GET_SERIALS, GET_USER, PUT_CHANGE_USER, INITIALIZING_APP, GET_CURRENT_SERIAL } from "./types"


export const addNewSerial = (payload: INewSerialForPostType) => {
	return (dispatch: Dispatch<SerialActionType>) => {
		axios.post('http://localhost:3004/serials', payload)
			.then(response => {
				dispatch({
					type: ADD_NEW_SERIAL, 
					payload: response.data,
				})
			}).catch(err => console.log(err.message))
	}
}

export const getSerials = () => {
	return (dispatch: Dispatch<SerialActionType>) => {
		axios.get('http://localhost:3004/serials?_sort=id').then(response => {
			dispatch({
				type: GET_SERIALS, 
				payload: response.data,
			})
		})
	}
}

export const getCurrentSerial = (id: number) => {
	return (dispatch: Dispatch<SerialActionType>) => {
		axios.get('http://localhost:3004/serials/'+id).then(response => {
			dispatch({
				type: GET_CURRENT_SERIAL, 
				payload: response.data,
			})
		})
	}
}

// --------USER-------- //

export const changeUserInfo = (user: IUser) => {
	return (dispatch: Dispatch<SerialActionType>) => {
		axios.put(`http://localhost:3004/users/123`, user)
			.then(response => {
				dispatch({
					type: PUT_CHANGE_USER,
					payload: response.data
				})
			})
	}
}

export const getUser = () => {
	return (dispatch: Dispatch<SerialActionType>) => {
		axios.get('http://localhost:3004/users/123')
			.then(response => {
				dispatch({
					type: GET_USER,
					payload: response.data
				})
			})
	}
}

// --------APP-------- //

export const initializing = () => {
	return {
		type: INITIALIZING_APP
	}
}

export const initializeApp = () => (dispatch: any ) => {
	const promise = dispatch(getUser())
	const promise2 = dispatch(getSerials())

	Promise.all([promise, promise2])
		.then(() => dispatch(initializing()))
}