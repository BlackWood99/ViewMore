import styles from "./Serial.module.css"
import SerialInfo from "./SerialInfo/SerialInfo"
import SerialSeasons from "./SerialSeasons/SeialSeasons"

const Serial = (props: any) => {
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
