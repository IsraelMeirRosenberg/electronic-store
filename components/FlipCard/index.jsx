import style from './style.module.scss'
export default function FlipCard() {
    return (
        <>
            <div className={style.main}>
                <div className={style.holdFlip}>

                    <div className={ style.front}><img style={{width:"100%", height:"100%"}} src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" alt="" /></div>
                    <div  className={ style.back}>
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