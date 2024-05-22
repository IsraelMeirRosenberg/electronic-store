import style from './style.module.scss'
export default function FlipCard({firstImg,secondImg}) {
    return (
        <>
            <div className={style.main}>
                <div className={style.holdFlip}>

                    <div className={ style.front}><img style={{width:"100%", height:"100%"}} src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" alt="" /></div>
                    <div style={{backgroundImage: "url(https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/IMGWorldsofAdventureTicketinDubai.jpg)"}} className={ style.back}>
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