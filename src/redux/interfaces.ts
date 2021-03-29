import { ADD_NEW_SERIAL, GET_SERIALS, PUT_CHANGE_USER, GET_USER, INITIALIZING_APP, GET_CURRENT_SERIAL } from "./types";

export interface IAppActionType {
    type: typeof INITIALIZING_APP
    isInitialized: boolean
}

// ------------------------------------------

// Serial actions

interface ISerialAddAction {
    type: typeof ADD_NEW_SERIAL
    payload: INewSerialType
}

interface ISerialGetAction {
    type: typeof GET_SERIALS
    payload: INewSerialType[]
}
interface ISerialCurrentGetAction {
    type: typeof GET_CURRENT_SERIAL
    payload: INewSerialType
}

interface IChangeUserPutAction {
    type: typeof PUT_CHANGE_USER,
    payload: IUser
}

interface IUserGetAction {
    type: typeof GET_USER
    payload: IUser
}

export type SerialActionType = ISerialAddAction | ISerialGetAction | ISerialCurrentGetAction | IChangeUserPutAction | IUserGetAction


// ------------------------------------------

// NEW TYPES FOR SERIAL

export interface IEpisodeType {
    episodeId: number
    epNumber: number
    epName: string
    viewed: boolean
}

export interface ISeasonType {
    seasonId: number
    episodes: IEpisodeType[] | null | undefined
}

export interface INewSerialType {
    id: number
    name: string
    raiting: number
    viewers: number
    audience: number
    countSeason: number
    year: number
    description: string
    status: number
    img?: string
    seasons?: ISeasonType[] | null | undefined
}

export interface INewSerialForPostType {
    id: number
    name: string
    raiting: number
    viewers: number
    audience: number
    countSeason: number
    year: number
    description: string
    status: number
    img: string
    seasons? : ISeasonType[] | null | undefined
}

// Users viewed serials types

export interface IUsersViewedEpisode {
    episodeId: number
    epNumber: number
    epName: string
    viewed: boolean
}

export interface IUsersViewedSeason {
    seasonId: number
    episodes: IUsersViewedEpisode[]
}
// export interface IUsersViewedSeason {
//     seasonId: number
//     episodes: IUsersViewedEpisode[] | null
// }

export interface IUsersViewedSerial {
    serialId: number
    serialName: string
    myRaiting: number
    status: number
    seasons: IUsersViewedSeason[]
}

export interface IUser {
    id: number | null
    name: string | null
    mySerials: IUsersViewedSerial[]
}

// NEW STATE TYPE

interface IUserState {
    user: IUser | null | undefined
}

interface ISerialsState {
    serials: INewSerialType[] | null | undefined
}

//type currentSerial = null as ICurrentSerial


export type newStateType = IUserState | ISerialsState

export interface INewState {
    user: IUser | null | undefined
    serials: INewSerialType[]
    currentSerial?: null | INewSerialType 
}

export interface INewSerialsStateToProps {
	serialsPage: {
        user: IUser,
        serials: INewSerialType[]
        currentSerial?: INewSerialType | null
    }
}