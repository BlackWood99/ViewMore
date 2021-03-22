import { useEffect, useState } from "react"
import styles from "./Serial.module.css"
import SerialInfo from "./SerialInfo/SerialInfo"
import SerialSeasons from "./SerialSeasons/SeialSeasons"

const Serial = (props: any) => {

    if (!props.currSer) return <h1>Loading...</h1>
    
	return (
		<div className={styles.serialPage}>
			
			<SerialInfo currSer={props.currSer} foundSer={props.foundSer} onChangeRaiting={props.onChangeRaiting}/>

            <SerialSeasons currSer={props.currSer} foundSer={props.foundSer}/>

		</div>
	)
}

export default Serial
