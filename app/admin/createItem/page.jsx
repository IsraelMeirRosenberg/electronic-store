"use client"
import { useState } from 'react'
import style from './style.module.scss'
export default function () {
    // const [formData, setFormData] = useState({
    //     name: "",
    //     desc: "",
    //     color: "",
    //     price: "",
    //     imgCompany: ""
    //     , image: ""
    // })
    const handleSubmit = (e) => {
        e.preventDefault()
        const fd = new FormData(e.target)
        const body = Object.fromEntries(fd)
        console.log(body);
    }
    return (
        <>
            <div className={style.page}>
                <form onSubmit={handleSubmit} className={style.form} action="">
                    <div className={style.holdLabels}>
                        <label >
                            <p>שם מוצר:</p>
                            <input name='name' className={style.input} type="text" />
                        </label>

                        <label >
                            <p> מחיר:</p>
                            <input name='price' className={style.input} type="number" />
                        </label>
                        <label >
                            <p>תיאור מוצר:</p>
                            <input name='desc' className={style.input} type="text" />
                        </label>
                        <label >
                            <p>תמונת מוצר:</p>
                            <input name='image' className={style.input} type="text" />
                        </label>
                        <label>
                            <p>צבע:</p>
                            <select name='color' className={style.select}>
                                <option value="">---</option>
                                <option value="שחור">שחור</option>
                                <option value="כחול">כחול</option>
                            </select>
                        </label>
                        <label>
                            <p>שם מותג:</p>
                            <select name={"imgCompany"} className={style.select}>
                                <option value="">---</option>
                                <option value="Apple">Apple</option>
                                <option value="Sharp">Sharp</option>
                            </select>
                        </label>
                    </div>
                    <button type='submit'>ok</button>
                </form>
            </div>
        </>
    )
}