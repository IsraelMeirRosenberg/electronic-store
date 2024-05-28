import style from './style.module.scss'
export default function () {

    return (
        <>
            <div className={style.page}>
                <form className={style.form} action="">
                    <div className={style.holdLabels}>
                        <label >
                            <p>שם מוצר:</p>
                            <input className={style.input} type="text" />
                        </label>

                        <label >
                            <p> מחיר:</p>
                            <input className={style.input} type="number" />
                        </label>
                        <label >
                            <p>תיאור מוצר:</p>
                            <input className={style.input} type="text" />
                        </label>
                        <label >
                            <p>תמונת מוצר:</p>
                            <input className={style.input} type="text" />
                        </label>
                        <label>
                            צבע:
                            <select className={style.select}>
                                <option value="">שחור</option>
                                <option value="">כחול</option>
                            </select>
                        </label>

                        <select className={style.select}>
                            <option value="">Apple</option>
                            <option value="">Sharp</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}