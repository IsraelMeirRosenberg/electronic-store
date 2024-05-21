
import AccordionFooter from '../AccordionFooter'
import InputFooter from '../InputFooter'
import style from './style.module.scss'
export default function Footer() {
    return (
        <>
            <div className={style.main}>


                <div className={style.holdForm}>

                    <p className={style.textJoin}>הצטרפות לרשימת דיור</p>
                    <InputFooter />
                    <InputFooter />
                    <button className={style.btnYellow} type='submit'>להרשמה</button>
                </div>

                <div className={style.flexUl}>

                    <div> <p><b>עלינו ועל האתר</b></p>
                        <ul>

                            {[1, 2, 3, 4, 5, 6, 7, 8].map(a => <li className={style.li}>מוצרים זמינים</li>)}
                        </ul>
                    </div>
                    <div> <p><b>קטגוריות מוצרים מובילו</b>ת</p>
                        <ul>

                            {[1, 2, 3, 4, 5, 6, 7, 8].map(a => <li className={style.li}>צור קשר</li>)}
                        </ul></div>
                    <div> <p><b>מידע נוסף</b></p>
                        <ul>

                            {[1, 2, 3, 4, 5, 6, 7, 8].map(a => <li className={style.li}>תקנון שוברים בכל עת ושעה</li>)}
                        </ul></div>

                </div>

                <div className={style.holdAccordion}>
<AccordionFooter/>
<AccordionFooter/>
                </div>

            </div>

        </>
    )
}