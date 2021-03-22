
import { StarRaiting } from '../../../../utils/StarRaiting/StarRaiting'
import styles from "./SerialItem.module.css"


export const SerialItem = (props: any) => {

    return (
        <div className={styles.serialsBlock__serialList_item}>
            <div className={styles.name}>
                <h4>{props.serial.name}</h4>
            </div>

            <div className={styles.raiting}>

                <StarRaiting serial={props.serial} onChangeRaiting={props.onChangeRaiting}/>

            </div>

            <div className={styles.countEp}>
                <progress className={styles.progress} value="23" max="100"></progress>
            </div>
        </div>
    )

}