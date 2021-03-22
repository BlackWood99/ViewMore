import styles from "./SerialsBlock.module.css"
import { SerialItem } from "./SerialsItem/SerialItem"


const SerialsBlock = (props: any) => {
    const mySerials: any[] = props.serials

	return (
		<div className={styles.serialsBlock}>
			<div className={styles.serialsBlock__buttons}>
				<button className={styles.serialsBlock_btn}>Смотрю</button>
				<button className={styles.serialsBlock_btn}>Буду смотреть</button>
				<button className={styles.serialsBlock_btn}>Перестал</button>
				<button className={styles.serialsBlock_btn}>Не смотрю</button>
			</div>
			<div className={styles.serialsBlock__serialListWrap}>
				<div className={styles.serialsBlock__info}>
					<h3>Смотрю</h3>
					<span>26 дней 13 часов 57 минут</span>
				</div>
				<div className={styles.serialsBlock__serialList}>
					{mySerials.map((serial) => {
						return (
							<SerialItem
								serial={serial}
								onChangeRaiting={props.onChangeRaiting}
								key={Date.now() + Math.random()}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default SerialsBlock
