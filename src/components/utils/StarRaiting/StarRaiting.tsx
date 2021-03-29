import { uid } from "react-uid"
import { INewSerialType, IUsersViewedSerial } from "../../../redux/interfaces"
import { Star } from "./Star"

interface IStarRaitingProps {
	serial: IUsersViewedSerial | INewSerialType
	onChangeRaiting? (serial: IUsersViewedSerial): void
}

export const StarRaiting = (props: IStarRaitingProps) => {
	
    const changeStarHandler = (value: number) => {
		const newSerial: any = {
			...props.serial,
			myRaiting: value
		}

		if (props.onChangeRaiting) {
			props.onChangeRaiting(newSerial)
		}
    }

	const stars = []

	for (let i = 1; i <= 5; i++) {
		stars.unshift(
			<Star
				value={i}
				serial={props.serial}
				key={uid(i)}
				onChangeRaiting={changeStarHandler}
			/>
		)
	}

	return (
		<div className='star-rating'>
			<form className='star-rating__wrap'>{stars}</form>
		</div>
	)
}
