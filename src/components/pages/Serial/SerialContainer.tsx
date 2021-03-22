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

    function search(nameKey: any, myArray: any){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].serialId == nameKey) {
                return myArray[i]
            }
        }
    }

    const foundSer:any = search(id, props.user.mySerials)
    

    const onChangeRaiting = (serial: any, value:number) => {
		props.changeSerialRaiting(serial, value)
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
