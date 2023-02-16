import React from "react";
import s from './Search.module.css'
// import ContentFilter from "../Content_filter/ContentFilter";


const Search = () => {
    return (
    <div>
        <form className={s.form}>
            <input className={`${s.input}`} type="text" placeholder="Search"/>
            <button className={`${s.button} ${s.button_search}`} type="submit"></button>
        </form>
        {/*<div>*/}
        {/*    /!*<ContentFilter/>*!/*/}
        {/*</div>*/}
    </div>
    )
}
export default Search;