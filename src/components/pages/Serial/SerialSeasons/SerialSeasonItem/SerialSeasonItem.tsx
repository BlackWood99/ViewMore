import { uid } from "react-uid"
import styles from "../../Serial.module.css"
import EpisodeItem from "./EpisodeItem"

const SerialSeasonItem = (props: any) => {

	//////

	let haveSeason: any
	if (props.foundSer.status != 4) {
		haveSeason = props.foundSer.seasons.find((seas: any) => seas.seasonId == props.season.seasonId)
	} else haveSeason = false
	//console.log(props.foundSer)
	//////

	const episodes = props.season.episodes
		.sort((a: any, b: any) => (a.epNumber < b.epNumber ? 1 : -1))
		.map((ep: any) => {
			return (
				<EpisodeItem
					episode={ep}
					seasonId={props.season.seasonId}
					key={uid(ep)}
					onChangeViewedEp={props.onChangeViewedEp}
					haveSeason={haveSeason}
				/>
			)
		})

	

	return (
		<div className={styles.serialSeasons_item}>
			<div className={styles.season}>
				<h4>{props.season.seasonId}</h4>
			</div>

			<div className={styles.episodesBlock}>{episodes}</div>
		</div>
	)
}

export default SerialSeasonItem
