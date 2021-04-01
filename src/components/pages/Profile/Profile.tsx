import styles from "./Profile.module.css"

import {
	INewSerialsStateToProps,
	INewSerialType,
	INewState,
	IUser,
	IUsersViewedSerial,
} from "../../../redux/interfaces"
import { changeUserInfo } from "../../../redux/actions"
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import SerialsBlock from "./SerialsBlock/SerialsBlock"
import ProfilePanel from "./ProfilePanel/ProfilePanel"
import { Preloader } from "../../utils/Preloader/Preloader"

interface IProfileStateProps {
	serials: INewSerialType[]
	user: IUser
	changeUserInfo: (user: IUser) => void
}

const Profile: any = (props: IProfileStateProps) => {

	if (!props.user) return <Preloader />

	const mySerials = props.user.mySerials

	const onChangeRaiting = (serial: IUsersViewedSerial) => {
		let user = {
            ...props.user,
            mySerials: props.user.mySerials.map(ser => {
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
				<ProfileInfo user={props.user}/>

				<SerialsBlock
					mySerials={mySerials}
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
