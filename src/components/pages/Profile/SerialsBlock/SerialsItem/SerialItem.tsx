import { NavLink } from 'react-router-dom'
import { StarRaiting } from '../../../../utils/StarRaiting/StarRaiting'
import styles from "./SerialItem.module.css"


export const SerialItem = (props: any) => {

    const foundSer = props.user.mySerials.find((ser: any) => ser.serialId == props.serial.id)

    return (
        <div className={styles.serialsBlock__serialList_item}>
            <div className={styles.name}>
                <NavLink to={`/Serial/${props.serial.id}`}>
                    <h4>{props.serial.name}</h4>
                </NavLink>
            </div>

            <div className={styles.raiting}>

                <StarRaiting serial={foundSer} onChangeRaiting={props.onChangeRaiting}/>

            </div>

            <div className={styles.countEp}>
                <progress className={styles.progress} value="23" max="100"></progress>
            </div>
        </div>
    )

}