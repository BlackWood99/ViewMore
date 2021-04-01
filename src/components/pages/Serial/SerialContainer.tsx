import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getCurrentSerial, changeUserInfo } from "../../../redux/actions"
import {
	INewSerialType,
	IUser,
	IUsersViewedEpisode,
	IUsersViewedSeason,
	IUsersViewedSerial,
} from "../../../redux/interfaces"
import Serial from "./Serial"

interface ISerialContainerToProps {
	user: IUser
	serials: INewSerialType[]
	currentSerial: INewSerialType
	getCurrentSerial: (id: number) => void
	changeUserInfo: (user: IUser) => void
    match: any
}

const SerialContainer = (props: ISerialContainerToProps) => {
	const [id, setId] = useState(props.match.params.id)

	useEffect(() => {
		setId(props.match.params.id)
	}, [props.match.params.id])

	useEffect(() => {
		props.getCurrentSerial(id)
	}, [])

	if (!props.currentSerial || !props.user) return <h1>Loading...</h1>

	// Поиск сериала у юзера
	function search(nameKey: any, myArray: any) {
		for (var i = 0; i < myArray.length; i++) {
			if (myArray[i].serialId == nameKey) {
				return myArray[i]
			}
		}
	}

	let foundSer: any = search(id, props.user.mySerials)

	// Че-нибудь придумать вместо этого
	if (!foundSer) {
		foundSer = {
			status: 4,
		}
	}

	const onChangeStatus = (serial: INewSerialType, status: number) => {
		let isFoundSer: IUsersViewedSerial = search(id, props.user.mySerials)

		let user = {
			...props.user,
		}

		if (status == 4) {
			user.mySerials = props.user.mySerials.filter((ser: any) => {
				if (ser.serialId != serial.id) {
					return ser
				}
			})
		} else {
			if (!isFoundSer) {
				user.mySerials = [
					...props.user.mySerials,
					{
						serialId: serial.id,
						serialName: serial.name,
						myRaiting: 0,
						seasons: JSON.parse(
							JSON.stringify(props.currentSerial.seasons)
						),
						status: status,
					},
				]
			} else {
				user.mySerials = props.user.mySerials.map((ser: any) => {
					if (ser.serialId == serial.id) {
						return { ...ser, status: status }
					}

					return ser
				})
			}
		}

		props.changeUserInfo(user)
	}

	const onChangeRaiting = (serial: any) => {
		let user = {
			...props.user,
			mySerials: props.user.mySerials.map((ser: any) => {
				if (ser.serialId == serial.serialId) {
					return serial
				} else return ser
			}),
		}

		props.changeUserInfo(user)
	}

	const onChangeViewedEp = (
		episode: any,
		isViewed: boolean,
		seasonId: number
	) => {
		let user = {
			...props.user,
			mySerials: props.user.mySerials.map((ser: IUsersViewedSerial) => {
				if (ser.serialId == props.currentSerial.id) {
					return {
						...ser,
						seasons: ser.seasons.map((season: IUsersViewedSeason) => {
							if (season.seasonId == seasonId) {
								return {
									...season,
									episodes: season.episodes.map(
										(ep: IUsersViewedEpisode) => {
											if (ep.epNumber == episode.epNumber) {
												return {
													...ep,
													viewed: isViewed,
												}
											} else return ep
										}
									),
								}
							} else return season
						}),
					}
				} else return ser
			}),
		}

		props.changeUserInfo(user)
	}

	return (
		<Serial
			currSer={props.currentSerial}
			foundSer={foundSer}
			onChangeRaiting={onChangeRaiting}
			onChangeStatus={onChangeStatus}
			onChangeViewedEp={onChangeViewedEp}
		/>
	)
}

const mapStateToProps = (state: any): any => {
	return {
		user: state.serialsPage.user,
		serials: state.serialsPage.serials,
		currentSerial: state.serialsPage.currentSerial,
	}
}

export default connect(mapStateToProps, { getCurrentSerial, changeUserInfo })(
	SerialContainer
)
