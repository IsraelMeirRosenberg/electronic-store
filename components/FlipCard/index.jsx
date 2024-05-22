import style from './style.module.scss'
export default function FlipCard({ firstImg, secondImg }) {
    return (
        <>
            <div className={style.main}>
                <div className={style.holdFlip}>

                    <div className={style.front}><img style={{ width: "100%", height: "100%" }} src={firstImg} alt="" /></div>
                    <div style={{ backgroundImage: `url(${secondImg})` }} className={style.back}>
                        <div>
                            לחנות הרשמית
                            <br />
                            לחץ כאן
                        </div>
                    </div>

                </div>
            </div>
        </>)
}