import styles from "./Profile.module.css"

import {
	INewSerialsStateToProps,
	INewSerialType,
	INewState,
	IUser,
} from "../../../redux/interfaces"
import { changeSerialRaiting } from "../../../redux/actions"
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import SerialsBlock from "./SerialsBlock/SerialsBlock"
import ProfilePanel from "./ProfilePanel/ProfilePanel"

interface IProfileStateProps {
	serials: INewSerialType[]
	user: IUser
	changeSerialRaiting(serial: INewSerialType, value: number): void
}

const Profile: any = (props: IProfileStateProps) => {
	console.log('profile render')

	if (!props.user) return <h1>Loading</h1>

	const filterUserSerials = props.user.mySerials.map((serial) => {
		return serial.serialId
	})

	const mySerials = props.serials
		.map((serial) => {
			if (filterUserSerials.includes(serial.id)) {
				return serial
			}
		})
		.filter((serial) => serial !== undefined)

	const onChangeRaiting = (serial: INewSerialType, value: number) => {
		props.changeSerialRaiting(serial, value)
	}

	return (
		<div className={styles.profileBlock}>
			{/* -----LEFT----- */}
			<div className={styles.profileBlock__content}>
				<ProfileInfo />

				<SerialsBlock
					serials={mySerials}
					onChangeRaiting={onChangeRaiting}
				/>
			</div>

			{/* -----RIGHT----- */}
			<div className={styles.profileBlock__rightAside}>
				<ProfilePanel />
			</div>
		</div>
	)
}

const mapStateToProps = (state: INewSerialsStateToProps): INewState => {
	return {
		user: state.serialsPage.user,
		serials: state.serialsPage.serials,
	}
}

export default connect(mapStateToProps, {
	changeSerialRaiting,
})(Profile)
