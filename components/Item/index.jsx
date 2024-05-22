import React from "react";
import style from "./style.module.scss";
import BtnAddToCart from "../BtnAddToCart";
export default function Item({...props}) {
const {image , name} = props
console.log(name);
  const flags = {
    samsung:
      "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/attribute/swatch/s/a/samsung_logo.png",
    electra:
      "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/attribute/swatch/e/l/electra_logo.png",
    LG: "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/attribute/swatch/l/g/lg_logo.png",
  };
  return (
    <div className={style.main}>
      <div className={style.companyImg}>
        <img src={flags["LG"]} alt="" />
      </div>
      <div className={style.holdImg}>
        <img
          src={id}
          alt=""
        />
      </div>
      <p>
        <b>צבע : שחור</b>
      </p>
      <div>
        {" "}
        מקרר 4 דלתות בסגנון צרפתי 468 מקפיא תחתון פלוס כגימור נירוסטה אחריות
        יבואן רשמי
      </div>
      <div>{price}</div>
      <BtnAddToCart />
    </div>
  );
}
