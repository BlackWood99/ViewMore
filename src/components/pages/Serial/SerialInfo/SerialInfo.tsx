import { useEffect, useState } from "react"
import { StarRaiting } from "../../../utils/StarRaiting/StarRaiting"
import styles from "../Serial.module.css"

const SerialInfo = (props: any) => {

	const [serStatus, setSerStatus] = useState(props.foundSer.status)

	useEffect(() => {
		setSerStatus(props.foundSer.status)
	}, [props.foundSer.status])

	const [disBtnId, setDisBtnId] = useState(serStatus)

    const onClickHandler = (event: any) => {
        let id = event.target.value
		setDisBtnId(id)
		props.onChangeStatus(props.currSer, Number(id))
    }

	return (
		<div className={styles.serialInfo_wrapper}>
			<div className={styles.serial_heading}>
				<h2>{props.currSer.name}</h2>
				<span>{props.currSer.name}</span>
			</div>
			<div className={styles.serialBlock}>
				<div className={styles.preview}>
					<div className={styles.preview_img}>
						<img
							src={props.currSer.img}
							alt='img'
						/>
					</div>
					<div className={styles.preview_buttons}>
						<button
							className={styles.btn + " " + styles.button_serialStatus}
							value={1}
							disabled={disBtnId == 1}
                            onClick={event => onClickHandler(event)}
						>
							Смотрю
						</button>
						<button
							className={styles.btn + " " + styles.button_serialStatus}
							value={2}
							disabled={disBtnId == 2}
                            onClick={event => onClickHandler(event)}
						>
							Буду смотреть
						</button>
						<button
							className={styles.btn + " " + styles.button_serialStatus}
							value={3}
							disabled={disBtnId == 3}
                            onClick={event => onClickHandler(event)}
						>
							Перестал
						</button>
						<button
							className={styles.btn + " " + styles.button_serialStatus}
							value={4}
							disabled={disBtnId == 4}
                            onClick={event => onClickHandler(event)}
						>
							Не смотрю
						</button>
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.info_item}>
						<div className={styles.info_heading}>Дата выхода:</div>
						<div className={styles.info_value}>7 Apr 2013 - ...</div>
					</div>
					<div className={styles.info_item}>
						<div className={styles.info_heading}>Страна:</div>
						<div className={styles.info_value}>Япония</div>
					</div>
					<div className={styles.info_item}>
						<div className={styles.info_heading}>Канал:</div>
						<div className={styles.info_value}>MBS</div>
					</div>
					<div className={styles.info_item}>
						<div className={styles.info_heading}>Смотрящих:</div>
						<div className={styles.info_value}>
							{props.currSer.viewers}
						</div>
					</div>
					<div className={styles.info_item}>
						<div className={styles.info_heading}>Общая длительность:</div>
						<div className={styles.info_value}>
							1 день 22 часа 25 минут
						</div>
					</div>
					<div className={styles.info_item}>
						<div className={styles.info_heading}>Длительность серии:</div>
						<div className={styles.info_value}>25 мин</div>
					</div>
					<div className={styles.info_item}>
						<div className={styles.info_heading}>Рейтинг:</div>
						<div className={styles.info_value}>
							{props.currSer.raiting}
						</div>
					</div>
				</div>
			</div>
			{serStatus != 4 ? (
				<div className={styles.myAppraisalBlock}>
					<h3>Моя оценка</h3>
					<StarRaiting
						serial={props.foundSer}
						onChangeRaiting={props.onChangeRaiting}
					/>
				</div>
			) : (
				<span></span>
			)}

			<div className={styles.serial_descriptionBlock}>
				<h3>Описание</h3>
				<p>
					{props.currSer.description}
				</p>
			</div>
		</div>
	)
}

export default SerialInfo
