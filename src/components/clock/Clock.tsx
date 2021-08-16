import style from './Clock.module.css'
import {useEffect, useState} from "react";


const get2digitsString = (num: number) => num < 10 ? '0' + num : num;


export const Clock = () => {
    let [date, setDate] = useState(new Date())

    useEffect(() => {
        const clockInterval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(clockInterval)
        }
    }, [])

    return (
        <div className={style.clock}>
            <div className={style.frame}>
                <span>{get2digitsString(date.getHours())}</span>
                :
                <span>{get2digitsString(date.getMinutes())}</span>
                :
                <span>{get2digitsString(date.getSeconds())}</span>
            </div>
        </div>
    )
}