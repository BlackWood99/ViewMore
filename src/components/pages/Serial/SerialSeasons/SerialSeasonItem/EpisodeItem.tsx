import styles from "../../Serial.module.css"

const EpisodeItem = (props: any) => {
	return (
		<div className={styles.episodesBlock_item}>
			<input className={styles.epMark} type='checkbox' />
			<span className={styles.epDate}>29.03.2021</span>
			<span className={styles.epNumb}>{props.episode.epNumber}</span>
			<span className={styles.epName}>{props.episode.epName}</span>
		</div>
	)
}

export default EpisodeItem
