import { uid } from "react-uid"
import styles from "../Serial.module.css"
import SerialSeasonItem from "./SerialSeasonItem/SerialSeasonItem"

const SerialSeasons = (props: any) => {

    if (!props.currSer.seasons) return <h1>Пока неизвестно</h1>

    const serialSeasons = props.currSer.seasons
        .sort((a: any, b: any) => a.seasonId < b.seasonId ? 1 : -1)
        .map((season: any) => {
            return <SerialSeasonItem season={season} foundSer={props.foundSer} onChangeViewedEp={props.onChangeViewedEp} key={uid(season)}/>
        })

	return (
		<div className={styles.serialSeasons_wrapper}>

			{/* <button className={styles.btn + " " + styles.btn_markAll}>
				Отметить все
			</button>
			<button className={styles.btn + " " + styles.btn_saveChange}>
				Сохранить
			</button> */}


			<div className={styles.serialsSeasons_heading}>
				<h2>Дата выхода и названия серий</h2>
			</div>

			<div className={styles.serialSeasons_block}>

				{serialSeasons}

			</div>
		</div>
	)
}

export default SerialSeasons
