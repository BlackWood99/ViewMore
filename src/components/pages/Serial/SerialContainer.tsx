import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getCurrentSerial, changeSerialRaiting } from "../../../redux/actions"
import { INewSerialType } from "../../../redux/interfaces"
import Serial from "./Serial"

const SerialContainer = (props: any) => {
    const [id, setId] = useState(props.match.params.id)

    useEffect(() => {
        props.getCurrentSerial(id)
    }, [])

    if (!props.currentSerial || !props.user) return <h1>Loading...</h1>

    // Поиск сериала у юзера
    function search(nameKey: any, myArray: any){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].serialId == nameKey) {
                return myArray[i]
            }
        }
    }

    const foundSer:any = search(id, props.user.mySerials)
    

    const onChangeRaiting = (serial: any) => {
        let user = {
            ...props.user,
            mySerials: props.user.mySerials.map((ser: any) => {
                if (ser.serialId == serial.serialId) {
                    return serial
                } else return ser

            })
        }

		props.changeSerialRaiting(user)
	}

	return (
		<Serial currSer={props.currentSerial} foundSer={foundSer} onChangeRaiting={onChangeRaiting}/>
	)
}

const mapStateToProps = (state: any): any => {
	return {
		user: state.serialsPage.user,
		serials: state.serialsPage.serials,
        currentSerial: state.serialsPage.currentSerial
	}
}

export default connect(mapStateToProps, { getCurrentSerial, changeSerialRaiting })(SerialContainer)
