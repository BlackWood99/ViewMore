import { useEffect, useState } from "react"
import { uid } from "react-uid"
import { IUser, IUsersViewedSerial } from "../../../../redux/interfaces"
import styles from "./SerialsBlock.module.css"
import { SerialItem } from "./SerialsItem/SerialItem"

interface ISerialsBlockToProps {
	user: IUser
	mySerials: IUsersViewedSerial[]
	onChangeRaiting: (serial: IUsersViewedSerial) => void
}

const SerialsBlock = (props: ISerialsBlockToProps) => {

	const [mySerials, setMySerials] = useState(props.mySerials)
	const [disBtnId, setDisBtnId] = useState(1)

	useEffect(() => {
		setMySerials(props.mySerials.filter(ser => {
			if (ser.status == disBtnId) return ser
		})
		)
	}, [props.mySerials])

	const onClickHandler = (event: any) => {
		let id = event.target.value
		setDisBtnId(id)
		setMySerials(props.mySerials.filter(ser => {
			if (ser.status == id) return ser
		})
		)
	}

	return (
		<div className={styles.serialsBlock}>
			<div className={styles.serialsBlock__buttons}>
				<button
					className={styles.serialsBlock_btn}
					value={1}
					disabled={disBtnId == 1}
					onClick={(event) => onClickHandler(event)}
				>
					Смотрю
				</button>
				<button
					className={styles.serialsBlock_btn}
					value={2}
					disabled={disBtnId == 2}
					onClick={(event) => onClickHandler(event)}
				>
					Буду смотреть
				</button>
				<button
					className={styles.serialsBlock_btn}
					value={3}
					disabled={disBtnId == 3}
					onClick={(event) => onClickHandler(event)}
				>
					Перестал
				</button>
				<button
					className={styles.serialsBlock_btn}
					value={4}
					disabled={disBtnId == 4}
					onClick={(event) => onClickHandler(event)}
				>
					Полностью посмотрел
				</button>
			</div>
			<div className={styles.serialsBlock__serialListWrap}>
				<div className={styles.serialsBlock__info}>
					<h3>Смотрю</h3>
					<span>26 дней 13 часов 57 минут</span>
				</div>
				<div className={styles.serialsBlock__serialList}>
					{mySerials.map(serial => {
						return (
							<SerialItem
								serial={serial}
								user={props.user}
								onChangeRaiting={props.onChangeRaiting}
								key={uid(serial)}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default SerialsBlock
