import styles from "./Footer.module.css"

const Footer: React.FC = () => {
	return (
		<footer>
			<div className='container'>
				<div className={styles.footerBlock}>
				    <div className={styles.logo}>VIEWMORE</div>
    				<nav className={styles.footer_nav}>
    					<a href='/' className={styles.link}>Сериалы</a>
    					<a href='/' className={styles.link}>Рейтинги</a>
    					<a href='/' className={styles.link}>Сообщество</a>
    					<a href='/' className={styles.link}>Правила</a>
    					<a href='/' className={styles.link}>Правила пользования</a>
    				</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
