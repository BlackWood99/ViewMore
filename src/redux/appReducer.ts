import { IAppActionType } from "./interfaces"
import { INITIALIZING_APP } from "./types"

const initialState = {
    isInitialized: false,
    isAuth: false
}

export const appReducer = (state = initialState, action: IAppActionType ) => {
    switch (action.type) {
        case INITIALIZING_APP: {
            return {...state, isInitialized: true}
        }
        default: return state
    }
}