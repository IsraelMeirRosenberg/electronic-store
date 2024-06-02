import React from "react";
import style from "./style.module.scss";
export default function page() {
  return (
    <div className={style.page}>
      <form className={style.form}>
        <p className={style.title}>הירשם אלינו</p>
          <div className={style.holdLabelsRight}>
            <label>
              <input
                className={style.input}
                type="text"
                name=""
                value=""
                placeholder="שם משתמש"
                autocomplete="off"
              />
            </label>
            <label>
              <input
                className={style.input}
                type="text"
                name=""
                value=""
                placeholder="סיסמא"
                autocomplete="off"
              />
            </label>
            <label>
              <input
                className={style.input}
                type="text"
                name=""
                value=""
                placeholder="דואר אלקטרוני"
                autocomplete="off"
              />
            </label>
            <label>
              <input
                className={style.input}
                type="text"
                name=""
                value=""
                placeholder="כתובת"
                autocomplete="off"
              />
            </label>
            <label>
              <input
                className={style.input}
                type="text"
                name=""
                value=""
                placeholder="מספר נייד"
                autocomplete="off"
              />
            </label>
            <div className={style.holdBtns}>
            <div className={style.holdOR}>
                <div></div>
                <div>OR</div>
                <div></div>
            </div>
            <div className={`${style.btnJoin} ${style.btnGoogle}`}>
              הצטרף באמצעות {" "}
              <img className={style.icons} src="/google.svg" alt="" />
            </div>
            <div className={`${style.btnJoin} ${style.btnFaceBook}`}>
              הצטרף באמצעות {" "}
              <img className={style.icons} src="/facebook.svg" alt="" />
            </div>
            <div className={`${style.btnJoin} ${style.btnEmail}`}>
              הצטרף
              באמצעות 
              <img className={style.icons} src="/gmail.svg" alt="" /> 
            </div>
            </div>
          </div>
         
    
      </form>
      {/* name: 
    password: 
    email: 
    phone: 
address:  */}
    </div>
  );
}
