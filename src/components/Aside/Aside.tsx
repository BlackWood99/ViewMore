import React from "react"
import styles from "./Aside.module.css"
import item1 from "../../assets/video-player.svg"
import item2 from "../../assets/calendar.svg"
import item3 from "../../assets/profile.svg"
import item4 from "../../assets/friends.svg"
import item5 from "../../assets/favorite.svg"
import item6 from "../../assets/award.svg"

import { NavLink } from "react-router-dom"

export const Aside: React.FC = () => {
	return (
		<aside className={styles.aside}>
			<div className={styles.aside__wrap}>
				<NavLink to='/'>
					<div className={styles.aside__item}>
						<img src={item1} alt='img' />
						<span>Мои сериалы</span>
					</div>
				</NavLink>
				<NavLink to='/'>
					<div className={styles.aside__item}>
						<img src={item2} alt='img' />
						<span>Календарь</span>
					</div>
				</NavLink>
				<NavLink to='/'>
					<div className={styles.aside__item}>
						<img src={item3} alt='img' />
						<span>Профиль</span>
					</div>
				</NavLink>
				<NavLink to='/'>
					<div className={styles.aside__item}>
						<img src={item4} alt='img' />
						<span>Друзья</span>
					</div>
				</NavLink>
				<NavLink to='/'>
					<div className={styles.aside__item}>
						<img src={item5} alt='img' />
						<span>Избранное</span>
					</div>
				</NavLink>
				<NavLink to='/'>
					<div className={styles.aside__item}>
						<img src={item6} alt='img' />
						<span>Награды</span>
					</div>
				</NavLink>
			</div>
		</aside>
	)
}
