import { INewSerialType, IUsersViewedEpisode, IUsersViewedSerial } from "../../../redux/interfaces"
import styles from "./Serial.module.css"
import SerialInfo from "./SerialInfo/SerialInfo"
import SerialSeasons from "./SerialSeasons/SeialSeasons"

interface ISerialToProps {
	currSer: INewSerialType
	foundSer: IUsersViewedSerial
	onChangeRaiting: (serial: IUsersViewedSerial) => void
	onChangeStatus: (serial: INewSerialType, status: number) => void
	onChangeViewedEp: (episode: IUsersViewedEpisode, isViewed: boolean, seasonId: number) => void
}

const Serial = (props: ISerialToProps) => {
	return (
		<div className={styles.serialPage}>
			<SerialInfo
				currSer={props.currSer}
				foundSer={props.foundSer}
				onChangeRaiting={props.onChangeRaiting}
				onChangeStatus={props.onChangeStatus}
			/>

			<SerialSeasons
				currSer={props.currSer}
				foundSer={props.foundSer}
				onChangeViewedEp={props.onChangeViewedEp}
			/>
		</div>
	)
}

export default Serial
