import styles from "../../Serial.module.css"
import EpisodeItem from "./EpisodeItem"

const SerialSeasonItem = (props: any) => {

    const episodes = props.season.episodes
        .sort((a: any, b: any) => a.epNumber < b.epNumber ? 1 : -1)
        .map((ep: any) => {
            return <EpisodeItem episode={ep} key={'episode'+Math.random()}/>
        })

	return (
		<div className={styles.serialSeasons_item}>
			<div className={styles.season}>
				<h4>{props.season.seasonId}</h4>
			</div>

			<div className={styles.episodesBlock}>
				
                {episodes}

			</div>
		</div>
	)
}

export default SerialSeasonItem
