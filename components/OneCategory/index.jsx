import style from './style.module.scss'
export default function OneCategory({ text, img }) {
    return (
        <>
            <div className={style.main}>
                <div className={style.holdImg}>
                    <img src={img} alt="" />
                </div>
                <div className={style.holdText}>{text}</div>
            </div>
        </>
    )
}