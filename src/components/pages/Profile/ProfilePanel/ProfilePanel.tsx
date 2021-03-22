import profileImg from "../../../../assets/profileImg.jpg"
import styles from "./ProfilePanel.module.css"

const ProfilePanel = () => {
	return (
		<div className={styles.profileBlock__profile}>
			<h3>BlackWood</h3>
			<img src={profileImg} className={styles.profileImg} alt='profile' />
			<div className={styles.profile__buttons}>
				<a href='/'>Редактировать</a>
				<a href='/'>Полная статистика</a>
				<a href='/'>Комментарии</a>
			</div>
		</div>
	)
}

export default ProfilePanel