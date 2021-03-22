import { Star } from "./Star"

export const StarRaiting = (props: any) => {
	
    const changeStarHandler = (value: any) => {
		const newSerial = {
			...props.serial,
			myRaiting: value
		}

		if (props.onChangeRaiting) {
			props.onChangeRaiting(newSerial)
		} else console.log('click click')
    }

	const stars = []

	for (let i = 1; i <= 5; i++) {
		stars.unshift(
			<Star
				value={i}
				serial={props.serial}
				key={Date.now() + Math.random()}
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
