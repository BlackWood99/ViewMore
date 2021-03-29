import { useEffect, useState } from "react"
import styles from "../../Serial.module.css"

const EpisodeItem = (props: any) => {

	const [isViewed, setIsViewed] = useState(false)

	useEffect(() => {
		if (props.haveSeason) {
			const currEp = props.haveSeason.episodes.find((ep: any) => ep.epNumber == props.episode.epNumber)
			if (currEp) {
				setIsViewed(currEp.viewed)
			} else setIsViewed(false)
		}
	}, [props.haveSeason])

///////

	const onChangeView = () => {
		setIsViewed(!isViewed)
		props.onChangeViewedEp(props.episode, !isViewed, props.seasonId)
	}

	return (
		<div className={styles.episodesBlock_item}>
			<input
				className={styles.epMark}
				type='checkbox'
				checked={isViewed}
				onChange={onChangeView}
			/>
			<span className={styles.epDate}>29.03.2021</span>
			<span className={styles.epNumb}>{props.episode.epNumber}</span>
			<span className={styles.epName}>{props.episode.epName}</span>
		</div>
	)
}

export default EpisodeItem
