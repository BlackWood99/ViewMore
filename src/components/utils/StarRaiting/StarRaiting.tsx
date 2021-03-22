import { Star } from "./Star"

export const StarRaiting = (props: any) => {
	
    const changeStarHandler = (value: any) => {
        props.onChangeRaiting(props.serial, value)
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
