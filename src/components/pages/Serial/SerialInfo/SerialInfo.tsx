import { useEffect, useRef, useState } from "react"
import { StarRaiting } from "../../../utils/StarRaiting/StarRaiting"
import styles from "../Serial.module.css"

const SerialInfo = (props: any) => {

	const [serStatus, setSerStatus] = useState(props.foundSer.status)

	useEffect(() => {
		setSerStatus(props.foundSer.status)
	}, [props.foundSer.status])

	//const [disBtnId, setDisBtnId] = useState(`btn${serStatus}`)
	const [disBtnId, setDisBtnId] = useState(serStatus)

    const onClickHandler = (event: any) => {
        let id = event.target.value
		setSerStatus(id)
		setDisBtnId(id)
		console.log(id)
		console.log(serStatus)
		console.log(disBtnId)
		props.onChangeStatus(props.currSer, Number(id))
    }

	console.log('hihi' + serStatus)

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
							src='https://cdn.hipwallpaper.com/i/97/30/fpOR8l.jpg'
							alt='img'
						/>
					</div>
					<div className={styles.preview_buttons}>
						<button
							className={styles.btn + " " + styles.button_serialStatus}
							//id="btn1"
							value={1}
							disabled={disBtnId == 1}
                            onClick={event => onClickHandler(event)}
						>
							Смотрю
						</button>
						<button
							className={styles.btn + " " + styles.button_serialStatus}
							//id="btn2"
							value={2}
							disabled={disBtnId == 2}
                            onClick={event => onClickHandler(event)}
						>
							Буду смотреть
						</button>
						<button
							className={styles.btn + " " + styles.button_serialStatus}
							//id="btn3"
							value={3}
							disabled={disBtnId == 3}
                            onClick={event => onClickHandler(event)}
						>
							Перестал
						</button>
						<button
							className={styles.btn + " " + styles.button_serialStatus}
							//id="btn4"
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
			{serStatus !== 4 ? (
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
					С давних времён человечество ведёт свою борьбу с Гигантами.
					Гиганты это огромные существа, ростом с многоэтажный дом, которые
					не обладают большим интеллектом, но сила их просто ужасна. Они
					едят людей и получают от этого удовольствие. После
					продолжительной борьбы остатки человечества создали стену,
					окружившую страну людей, через которую не пройдут даже Гиганты. С
					тех пор прошло сто лет. Человечество мирно живёт под защитой
					стены. Но в один день мальчик Эрен и его приёмная сестра Микаса
					становятся свидетелями страшного события  участок стены был
					разрушен супер-гигантом, появившемся прямо из воздуха. Гиганты
					атакуют город и двое детей в ужасе видят, как один из монстров
					заживо съедает их мать. Брат и сестра выживают, и Эрен клянется,
					что убьет всех гигантов и отомстит за всё человечество!
				</p>
			</div>
		</div>
	)
}

export default SerialInfo
