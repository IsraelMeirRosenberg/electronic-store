'use client'
import React from 'react'
import { useState } from 'react'
import style from './style.module.scss'
export default function AccordionFooter() {
    const [open,setOpen] = useState(false)
    const handleClick = () => {
setOpen(prev=>(!prev))
}
console.log(open);
    return (
        <>
            <div  style={open?{filter:"brightness(150%)"}:{}} onClick={handleClick} className={style.main}>
                <div>מידע נוסף</div>
                <div className={style.arrow}style={open?{rotate:"-90deg"}:{}}>{">"}</div>
            </div>
           {open&& <div className={style.accordion}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias eius deleniti dolorum ea. Porro, quas unde tempora assumenda hic deleniti omnis dicta rerum vel ex fuga repudiandae architecto reiciendis ipsum culpa laborum aliquid ratione nostrum laudantium quam nesciunt temporibus rem. Dignissimos illo id, praesentium enim quae laboriosam, vel dolorum sunt sint odio beatae culpa repellendus ducimus eos eius repellat libero earum consequatur dolore a voluptas obcaecati dolorem reprehenderit? Aspernatur, nam voluptatibus impedit nulla ipsa culpa eaque qui quam assumenda doloremque eveniet dicta quis eum voluptate? Atque quaerat iure, maiores asperiores temporibus cumque sed pariatur repudiandae vitae voluptas, officiis a sit ipsam nemo repellat placeat? Nobis quis blanditiis perferendis quo magnam harum distinctio ipsam a quod? Odio quibusdam magnam, porro voluptatem minus, error repellat alias dolore nihil recusandae repellendus aut temporibus facilis. Id sequi quo odio, beatae quis voluptatibus consequuntur facere fugiat nisi praesentium aliquam non deleniti corrupti omnis accusamus assumenda hic earum ut reprehenderit ab a ducimus! Omnis numquam excepturi id possimus veniam facere saepe optio quas molestiae cupiditate enim praesentium quibusdam ipsam nisi corrupti, nostrum est aperiam sapiente, vel consectetur deserunt similique? Accusamus quis natus nesciunt qui suscipit voluptatum officia hic unde a temporibus? Saepe impedit atque nemo!
            </div>}
        </>
    )
}