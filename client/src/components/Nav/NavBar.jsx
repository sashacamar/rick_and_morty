import React from "react";
import SearchBar from "./SearchBar/SearchBar"
import { NavLink } from "react-router-dom";
import style from './NavBar.module.css'

export default function Nav ({onSearch}) {
    return <div className={style.contenedorNav}>
        <SearchBar onSearch={onSearch}/>
        <div className={style.contenedorLinks}>
            <NavLink className={style.link} to='/favorites'>❤️</NavLink>
            <NavLink className={style.link} to='/about'>ABOUT</NavLink>
            <NavLink className={style.link} to='/home'>HOME</NavLink>
            <NavLink className={style.link} to='/'>LOG OUT</NavLink>
        </div>
    </div>
}