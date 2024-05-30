
import { connectToMongo } from '@/server/connectToMongo'
import AccordionFooter from '../AccordionFooter'
import InputFooter from '../InputFooter'
import style from './style.module.scss'
import { read_cat_services } from '@/server/BL/services/category.services'
import Link from 'next/link'
export default async function Footer() {
    await connectToMongo()
    const categories = await read_cat_services()
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

                    <div> <p className={style.title}><b>עלינו ועל האתר:</b></p>
                        <ul>

                            {[1, 2].map(a => <li className={style.li}>מוצרים זמינים</li>)}
                        </ul>
                    </div>
                    <div> <p className={style.title}><b>קטגוריות מוצרים מובילו:</b></p>
                        <ul>

                            {categories.map(v => <Link key={v._id} href={`/category/${v._id}`}><li className={style.li}>{v.name}</li></Link>)}
                        </ul></div>
                    <div> <p className={style.title}><b>מידע נוסף:</b></p>
                        <ul>

                            {[1, 2, 3, 4, 5, 6, 7, 8].map(a => <li className={style.li}>תקנון שוברים בכל עת ושעה</li>)}
                        </ul></div>

                </div>

                <div className={style.holdAccordion}>
                    <AccordionFooter />
                    <AccordionFooter />
                </div>

            </div>

        </>
    )
}