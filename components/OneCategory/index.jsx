import style from './style.module.scss'
export default function OneCategory({ text, img }) {
    return (
        <>
            <div className={style.main}>
                <div className={style.holdImg}>
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Category-icons/MacBook_Pro.png" alt="" />
                </div>
                <div className={style.holdText}>מסכי מחשב</div>
            </div>
        </>
    )
}