"use client";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
import Item from "@/components/Item";
export default function ({ params: { itemId } }) {
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
    useEffect(() => {
        try {
            fetch(`/api/items/getItemById/${itemId}`)
                .then((res) => res.json())
                .then((data) => setFormData(data))
        } catch (error) {
            console.log(error);
        }

    }, [])
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value, isUpdated: false }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetch(`http://localhost:3000/api/items/updateItem/${itemId}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "PUT",
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    setFormData({ ...data, isUpdated: true })
                });
            setFormData({
                name: "",
                desc: "",
                color: "",
                price: "",
                imgCompany: "",
                image: "",
                category: "",
            })
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
                <form className={style.form} onSubmit={handleSubmit}>
                    <p className={style.title}>טופס עדכון מוצר</p>
                    {formData.isUpdated ? <p className={style.updated}>המוצר עודכן בהצלחה</p> : ""}
                    <div className={style.formDetails}>
                        <div className={style.holdLabels}>
                            <label>
                                <p>שם מוצר:</p>
                                <input
                                    required
                                    onChange={handleChange}
                                    name="name"
                                    className={style.input}
                                    type="text"
                                    autoComplete="off"
                                    value={formData.name || ""}
                                />
                            </label>

                            <label>
                                <p> מחיר:</p>
                                <input
                                    required
                                    onChange={handleChange}
                                    name="price"
                                    className={style.input}
                                    type="number"
                                    autoComplete="off"
                                    value={formData.price || ""}
                                />
                            </label>
                            <label>
                                <p>תיאור מוצר:</p>
                                <input
                                    required
                                    onChange={handleChange}
                                    name="desc"
                                    className={style.input}
                                    type="text"
                                    autoComplete="off"
                                    value={formData.desc || ""}
                                />
                            </label>
                            <label>
                                <p>תמונת מוצר:</p>
                                <input
                                    required
                                    onChange={handleChange}
                                    name="image"
                                    className={style.input}
                                    type="text"
                                    autoComplete="off"
                                    value={formData.image || ""}
                                />
                            </label>
                            <label>
                                <p>צבע:</p>
                                <input
                                    required
                                    onChange={handleChange}
                                    name="color"
                                    className={style.input}
                                    value={formData.color || ""}
                                    autoComplete="off"
                                />
                            </label>
                            <label>
                                <p>שם מותג:</p>
                                <input
                                    required
                                    onChange={handleChange}
                                    name={"imgCompany"}
                                    className={style.input}
                                    value={formData.imgCompany || ""}
                                    autoComplete="off"
                                />
                            </label>
                            <label>
                                <p>קטגוריה:</p>
                                <select
                                    required
                                    onChange={handleChange}
                                    name={"category"}
                                    className={style.select}
                                    value={formData.category || ""}
                                >
                                    <option value={formData?.category}>{allCategories.map(c => c._id == formData.category ? c.name : '')}
                                    </option>
                                    {allCategories.map((cat) => (
                                        <option key={cat._id} value={cat._id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <button className={style.btn} type="submit">
                                עדכן מוצר
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
