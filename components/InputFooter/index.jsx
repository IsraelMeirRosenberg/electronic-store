import style from './style.module.scss'
export default function InputFooter({name , placeholder,type}){
    return(
        <>
        <div className={style.main}>
        <input type="text" placeholder='הכנס'/>
        </div>
        </>
    )
}