import styles from "./Profile.module.css"

import {
	INewSerialsStateToProps,
	INewSerialType,
	INewState,
	IUser,
} from "../../../redux/interfaces"
import { changeUserInfo } from "../../../redux/actions"
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import SerialsBlock from "./SerialsBlock/SerialsBlock"
import ProfilePanel from "./ProfilePanel/ProfilePanel"

interface IProfileStateProps {
	serials: INewSerialType[]
	user: IUser
	changeUserInfo(user: any): void
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

	const onChangeRaiting = (serial: any) => {
		let user = {
            ...props.user,
            mySerials: props.user.mySerials.map((ser: any) => {
                if (ser.serialId == serial.serialId) {
                    return serial
                } else return ser

            })
        }

		props.changeUserInfo(user)
	}

	return (
		<div className={styles.profileBlock}>
			{/* -----LEFT----- */}
			<div className={styles.profileBlock__content}>
				<ProfileInfo />

				<SerialsBlock
					serials={mySerials}
					onChangeRaiting={onChangeRaiting}
					user={props.user}
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
	changeUserInfo,
})(Profile)
