import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getCurrentSerial, changeUserInfo } from "../../../redux/actions"
import { INewSerialType } from "../../../redux/interfaces"
import Serial from "./Serial"

const SerialContainer = (props: any) => {
    const [id, setId] = useState(props.match.params.id)

    useEffect(() => {
        setId(props.match.params.id)
    }, [props.match.params.id])

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

    let foundSer:any = search(id, props.user.mySerials)

    // Че-нибудь придумать вместо этого
    if (!foundSer) {
        foundSer = {
            status: 4
        }
    }
   

    const onChangeStatus = (serial: any, status: number) => {
        let isFoundSer:any = search(id, props.user.mySerials)

        let user = {
            ...props.user
        }

        if (status == 4) {
            user.mySerials = props.user.mySerials.filter((ser: any) => {
                if (ser.serialId != serial.id) {
                    return ser
                }
            })
        } else {
            if (!isFoundSer) {
                user.mySerials = [...props.user.mySerials, {
                        serialId: serial.id,
                        serialName: serial.name,
                        myRaiting: 0,
                        seasons: [],
                        status: status
                    }]
                
            } else {
                user.mySerials = props.user.mySerials.map((ser: any) => {
                        if (ser.serialId == serial.id) {
                            return {...ser, status: status}
                        }
    
                        return ser
                    })
                
            }
        }
        
        props.changeUserInfo(user)
    }
    

    const onChangeRaiting = (serial: any) => {
        let user = {
            ...props.user,
            mySerials: props.user.mySerials.map((ser: any) => {
                if (ser.serialId == serial.serialId) {
                    return serial
                } else return ser

            })
        }

		props.changeUserInfo(user)
	}


	return (
		<Serial currSer={props.currentSerial} foundSer={foundSer} onChangeRaiting={onChangeRaiting} onChangeStatus={onChangeStatus}/>
	)
}

const mapStateToProps = (state: any): any => {
	return {
		user: state.serialsPage.user,
		serials: state.serialsPage.serials,
        currentSerial: state.serialsPage.currentSerial
	}
}

export default connect(mapStateToProps, { getCurrentSerial, changeUserInfo })(SerialContainer)
