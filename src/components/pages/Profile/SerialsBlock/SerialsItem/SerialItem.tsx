import { NavLink } from 'react-router-dom'
import { StarRaiting } from '../../../../utils/StarRaiting/StarRaiting'
import styles from "./SerialItem.module.css"

import { Line } from 'rc-progress';
import { useEffect, useState } from 'react';
import { IUser, IUsersViewedSerial } from '../../../../../redux/interfaces';


interface ISerialItemProps {
    serial: IUsersViewedSerial
    user: IUser
    onChangeRaiting(serial: IUsersViewedSerial): void
}

export const SerialItem = (props: ISerialItemProps) => {
    
    let [countViewedEps, setCountViewedEps] = useState(0)
    let [countEps, setCountEps] = useState(0)
    let [precent, setPrecent] = useState(0)

    useEffect(() => {
        if (props.serial.seasons !== null) {
            for (let season = 0; season < props.serial.seasons.length; season++) {
                for (let ep = 0; ep < props.serial.seasons[season].episodes.length; ep++) {
                    if (props.serial.seasons[season].episodes[ep].viewed === true) {
                        setCountEps(countEps++)
                        setCountViewedEps(countViewedEps++)
                    } else setCountEps(countEps ++)
                }
            }
        }

        if (countEps && countViewedEps) setPrecent(countViewedEps / countEps * 100)
    }, [])
    

    return (
        <div className={styles.serialsBlock__serialList_item}>
            <div className={styles.name}>
                <NavLink to={`/Serial/${props.serial.serialId}`}>
                    <h4>{props.serial.serialName}</h4>
                </NavLink>
            </div>

            <div className={styles.raiting}>

                <StarRaiting serial={props.serial} onChangeRaiting={props.onChangeRaiting}/>

            </div>

            <div className={styles.countEp}>
                <Line percent={precent} strokeWidth={2} strokeColor="red" />
            </div>
        </div>
    )

}