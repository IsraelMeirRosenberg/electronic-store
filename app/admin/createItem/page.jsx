"use client";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
import Item from "@/components/Item";
export default function () {
  const [allCategories, setAllCategories] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    color: "",
    price: "",
    imgCompany: "",
    image: "",
    category: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:3000/api/items/createItem", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      })
      setFormData({
        name: "",
        desc: "",
        color: "",
        price: "",
        imgCompany: "",
        image: "",
        category: "",
      })
        .then((res) => res.json())
        .then((data) => data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch("http://localhost:3000/api/categories/getAllCategories", { method: "GET" })
      .then(res => res.json())
      .then(data => setAllCategories(data))
  }, [])
  return (
    <>
      <div className={style.page}>
        <form className={style.form} onSubmit={handleSubmit} action="">
          <p className={style.title}>טופס יצירת מוצר</p>
          <div className={style.formDetails}>
            <div className={style.holdLabels}>
              <label>
                <p>שם מוצר:</p>
                <input
                  onChange={handleChange}
                  name="name"
                  className={style.input}
                  type="text"
                  autocomplete="off"
                  value={formData.name || ""}
                />
              </label>

              <label>
                <p> מחיר:</p>
                <input
                  onChange={handleChange}
                  name="price"
                  className={style.input}
                  type="number"
                  autocomplete="off"
                  value={formData.price || ""}
                />
              </label>
              <label>
                <p>תיאור מוצר:</p>
                <input
                  onChange={handleChange}
                  name="desc"
                  className={style.input}
                  type="text"
                  autocomplete="off"
                  value={formData.desc || ""}
                />
              </label>
              <label>
                <p>תמונת מוצר:</p>
                <input
                  onChange={handleChange}
                  name="image"
                  className={style.input}
                  type="text"
                  autocomplete="off"
                  value={formData.image || ""}
                />
              </label>
              <label>
                <p>צבע:</p>
                <select
                  onChange={handleChange}
                  name="color"
                  className={style.select}
                  value={formData.color || ""}
                >
                  <option value="">---</option>
                  <option value="שחור">שחור</option>
                  <option value="כחול">כחול</option>
                </select>
              </label>
              <label>
                <p>שם מותג:</p>
                <select
                  onChange={handleChange}
                  name={"imgCompany"}
                  className={style.select}
                  value={formData.imgCompany || ""}
                >
                  <option value="">---</option>

                  {/* <option value="Apple">Apple</option>
                  <option value="Sharp">Sharp</option> */}
                </select>
              </label>
              <label>
                <p>קטגוריה:</p>
                <select
                  onChange={handleChange}
                  name={"category"}
                  className={style.select}
                  value={formData.category || ""}
                >
                  <option value="">---</option>
                  {
                    allCategories.map(cat => <option key={cat._id} value={cat.name}>{cat.name}</option>)
                  }
                </select>
              </label>
              <button className={style.btn} type="submit">
                צור מוצר
              </button>
            </div>
            <div className={style.itemSize}>
              <Item
                color={formData.color}
                desc={formData.desc}
                image={formData.image}
                imgCompany={formData.imgCompany}
                name={formData.name}
                price={formData.price}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
