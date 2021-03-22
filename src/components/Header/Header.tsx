import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className='row justify-content-between align-items-center'>
					<div className='col-2'>
						<div className='header__logo'>
							<h3>VIEWMORE</h3>
						</div>
					</div>
					<div className='col-5'>
						<nav className={styles.header__nav}>
							<NavLink to='/SerialsFormAdd' className={styles.header__nav_link}>
								Сериалы
							</NavLink>
							<a href='/' className={styles.header__nav_link}>
								Рейтинги
							</a>
							<a href='/' className={styles.header__nav_link}>
								Сообщество
							</a>
							<a href='/' className={styles.header__nav_link}>
								Новости
							</a>
						</nav>
					</div>
					<div className='col-3'>
						<div className='header__search-block'>
							<div className='input-group'>
								<input
									type='text'
									className='form-control'
									placeholder='Поиск...'
								/>
								<button
									className='btn btn-outline-secondary'
									type='button'
									id='button-search'
								>
									Найти
								</button>
							</div>
						</div>
					</div>
					<div className='col-2'>
						<div className={styles.header__login}>
							<span>BlackWood</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
