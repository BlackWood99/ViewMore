import React from "react"

export const Star = (props: any) => {

	let checked = false
	if (props.serial.myRaiting === props.value) {
		checked = true
	} else if (props.serial.raiting === props.value) {
		checked = true
	}

	console.log(props.serial)

    const id = 'star-rating-' + Date.now() + Math.random()

    const onChangeStar = () => {
        props.onChangeRaiting(props.value)
    }

	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}
