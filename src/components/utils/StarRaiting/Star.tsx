import { Fragment } from "react"
import { UID } from "react-uid"
//import { INewSerialType, IUsersViewedSerial } from "../../../redux/interfaces"

/* interface IStarProps {
	value: number
	serial: IUsersViewedSerial | INewSerialType
	onChangeRaiting(value: number): void
} */

export const Star = (props: any) => {
	let checked = false
	if (props.serial.myRaiting === props.value) {
		checked = true
	} else if (props.serial.raiting === props.value) {
		checked = true
	}

	//const id = "star-rating-" + Date.now() + Math.random()

	const onChangeStar = () => {
		props.onChangeRaiting(Number(props.value))
	}

	return (
		<UID name={(id) => `unique-${id}`}>
			{(id) => (
				<Fragment>
					<input
						className='star-rating__input'
						id={id}
						type='radio'
						name='rating'
						value={props.value}
						checked={checked}
						onChange={onChangeStar}
					/>
					<label
						className='star-rating__ico fa fa-star-o fa-lg'
						htmlFor={id}
					></label>
				</Fragment>
			)}
		</UID>
	)
}
