"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
export default function FilterItems() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState();
  const handleChange = (v) => {
    setValue(v.target.value);
  };
  return (
    <>
      <div>
        <button
          className={style.btnShow}
          onClick={() => setOpen((prev) => !prev)}
        >
          סינון
        </button>
        {open && (
          <div className={style.main}>
            <div className={style.byPrice}>
              <p className={style.title}>סינון על פי מחיר</p>
              <p>מינימום:</p>
              <input
                onChange={handleChange}
                className={style.range}
                type="range"
              />
              <p>מקסימום:</p>
              <input
                onChange={handleChange}
                className={style.range}
                type="range"
              />
            </div>
            <div className={style.selectCompany}>
              <div className={style.holdCheckBox}>
             <p className={style.title}>סינון לפי חברה</p>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => {
                  return (
                    <div key={i}>
                      <input type="checkbox" id={`cax${i}`} />
                      <label htmlFor={`cax${i}`}>Apple</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/*  div  for big screen */}
          <div className={style.mainBig}>
            <div className={style.byPrice}>
              <p className={style.title}>סינון על פי מחיר</p>
              <p>מינימום:</p>
              <input
                onChange={handleChange}
                className={style.range}
                type="range"
              />
              <p>מקסימום:</p>
              <input
                onChange={handleChange}
                className={style.range}
                type="range"
              />
            </div>
            <div className={style.selectCompany}>
              <div className={style.holdCheckBox}>
             <p className={style.title}>סינון לפי חברה</p>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => {
                  return (
                    <div key={i}>
                      <input type="checkbox" id={`cax${i}`} />
                      <label htmlFor={`cax${i}`}>Apple</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
       
      </div>
    </>
  );
}
