import { useEffect, useState } from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

import { initializeApp } from "./redux/actions"
import { INewSerialType, IUser } from "./redux/interfaces"

import { Aside } from "./components/Aside/Aside"
import { Header } from "./components/Header/Header"
import Profile from "./components/pages/Profile/Profile"
import SerialFormAdd from "./components/pages/SerialFormAdd/SerialFormAdd"
import Serial from "./components/pages/Serial/Serial"
import SerialContainer from "./components/pages/Serial/SerialContainer"


interface IAppStateToProps {
	appPage: { isInitialized: boolean }
	serialsPage: {
		serials: INewSerialType[]
		user: IUser
	}
}

interface IAppState {
	user: IUser
	serials: INewSerialType[]
	isInitialized: boolean
}

const App = (props: any) => {

	const onInitializeApp = props.initializeApp

	useEffect(() => {
		onInitializeApp()
	}, [])

	return (
		<div className='App'>
			<Header />

			<main className='main'>
				<div className='container'>
					<div className='grid-container'>
						<Aside />
						<div className='content'>
							<Switch>
								<Route component={Profile} path='/' exact />
								<Route
									component={SerialFormAdd}
									path='/SerialsFormAdd'
									exact
								/>
								<Route
									component={SerialContainer}
									path={`/Serial/:id`}
									exact
								/>
							</Switch>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

const mapStateToProps = (state: IAppStateToProps): IAppState => {
	return {
		user: state.serialsPage.user,
		serials: state.serialsPage.serials,
		isInitialized: state.appPage.isInitialized,
	}
}

export default connect(mapStateToProps, { initializeApp })(App)