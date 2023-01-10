import React from "react";
import s from './Header.module.css'


const Search = () => {
    return (
    <div>
        <form className={s.form}>
            <input className={`${s.input}`} type="text" placeholder="Search"/>
            <button className={`${s.button} ${s.button_search}`} type="submit"></button>
        </form>
    </div>
    )
}
export default Search;