import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { INewSerialsStateToProps, INewSerialType, INewSerialForPostType, newStateType } from "../../../redux/interfaces"
import { addNewSerial, changeSerialRaiting } from "../../../redux/actions"
import styles from "./SerialFormAdd.module.css"
import { Field, Form } from "react-final-form"
import { StarRaiting } from "../../utils/StarRaiting/StarRaiting"
import { NavLink } from "react-router-dom"



interface IAddNewSerialPropsType {
	serials: INewSerialType[]
	addNewSerial(serial: INewSerialType): void
	changeSerialRaiting(serial: INewSerialType, value:number): void
}

const SerialFormAdd: React.FC<IAddNewSerialPropsType> = (props) => {

	const [thisSerials, setThisSerials] = useState(props.serials)

	useEffect(() => {
		setThisSerials(props.serials)
	}, [props.serials])

	const submitHandler = (serial: INewSerialForPostType) => {
		
		let newSerial: INewSerialForPostType = {
			id: Date.now(),
			name: serial.name,
			raiting: Number(serial.raiting),
			viewers: serial.viewers,
			audience: serial.audience,
			countSeason: serial.countSeason,
			year: serial.year,
			status: 4
		}

		props.addNewSerial(newSerial)
	}


	return (
		<div className={styles.addSerials}>
			<h2>Добавить новый сериал</h2>
			
			<Form
				onSubmit={(values: INewSerialForPostType) => submitHandler(values)}
				validate={(values) => {
					const errors: any = {}
					if (!values.name) {
						errors.name = "Required"
					}
					if (!values.raiting) {
						errors.raiting = "Required"
					}
					if (!values.viewers) {
						errors.viewers = "Required"
					}
					if (!values.audience) {
						errors.audience = "Required"
					}
					if (!values.countSeason) {
						errors.countSeason = "Required"
					}
					if (!values.year) {
						errors.year = "Required"
					}
					return errors
				}}
				render={({ handleSubmit, form, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit}>
						<div className={styles.addSerials__form}>
							<Field name='name'>
								{({ input, meta }) => (
									<div className={styles.addSerials__form_label}>
										<label>Название сериала</label>
										<input
											{...input}
											type='text'
										/>
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
							<Field name='raiting'>
								{({ input, meta }) => (
									<div className={styles.addSerials__form_label}>
										<label>Рейтинг</label>
										<input
											{...input}
											type='text'
										/>
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
							<Field name='viewers'>
								{({ input, meta }) => (
									<div className={styles.addSerials__form_label}>
										<label>Смотрящих</label>
										<input
											{...input}
											type='text'
										/>
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
							<Field name='audience'>
								{({ input, meta }) => (
									<div className={styles.addSerials__form_label}>
										<label>Аудитория</label>
										<input
											{...input}
											type='text'
										/>
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
							<Field name='countSeason'>
								{({ input, meta }) => (
									<div className={styles.addSerials__form_label}>
										<label>Количество сезонов</label>
										<input
											{...input}
											type='text'
										/>
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
							<Field name='year'>
								{({ input, meta }) => (
									<div className={styles.addSerials__form_label}>
										<label>Год</label>
										<input
											{...input}
											type='text'
										/>
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>

							<button
								type='submit'
								disabled={submitting}
								className={styles.add_button}
							>
								Send
							</button>
						</div>
					</form>
				)}
			/>
			{/* ----------------------------- */}

			<section>
				<h2>Каталог сериалов</h2>
				<div className='serialsListWrap'>
					<div className={styles.serialsList__heading}>
						<span>Название</span>
						<span>Рейтинг</span>
						<span>Смотрящих</span>
						<span>Аудитория</span>
						<span>Сезонов</span>
						<span>Год</span>
					</div>
					<div className='serialsList'>

						{thisSerials.map(serial => {
							return (
								<div className={styles.serialsList__item} key={serial.id}>
									<div className={styles.name}>
										<NavLink to={'/Serial/' + serial.id} className={styles.link}>
											<h4>{serial.name}</h4>
										</NavLink>
									</div>

									<span> <StarRaiting serial={serial} /></span>

									<span>{serial.viewers}</span>
									<span>{serial.audience}%</span>
									<span>{serial.countSeason}</span>
									<span>{serial.year}</span>
								</div>
							)
						})}

					</div>

				</div>
			</section>
		</div>
	)
}

const mapStateToProps = (state: INewSerialsStateToProps): newStateType => {
	return {
		serials: state.serialsPage.serials,
	}
}

export default connect(mapStateToProps, { addNewSerial, changeSerialRaiting })(SerialFormAdd)
