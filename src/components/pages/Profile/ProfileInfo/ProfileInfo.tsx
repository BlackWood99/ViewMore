import { IUser } from "../../../../redux/interfaces"
import styles from "./ProfileInfo.module.css"

interface IProfileInfoProps {
	user: IUser
}

const ProfileInfo = (props: IProfileInfoProps) => {
	return (
		<div className={styles.infoBlock}>
			<h3>{props.user.name}</h3>
			<div className='row justify-content-between align-items-center'>
				<div className='col-3'>
					<div className={styles.infoBlock__item}>
						<h3>5235</h3>
						<span>эпизодов</span>
					</div>
				</div>
				<div className='col-3'>
					<div className={styles.infoBlock__item}>
						<h3>2856</h3>
						<span>часов</span>
					</div>
				</div>
				<div className='col-3'>
					<div className={styles.infoBlock__item}>
						<h3>476</h3>
						<span>дней</span>
					</div>
				</div>
				<div className='col-3'>
					<div className={styles.infoBlock__item}>
						<h2>1</h2>
						<span>среди друзей</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo
