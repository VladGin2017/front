import React from "react";
import { Link } from "react-router-dom";

export default function SubMenu() {
    return (
        <div className="submenu__container">
            <div className="submenu__list">
                <Link to='/today' className="submenu__item">Задачи на сегодня</Link>
                <Link to='/viewlist' className="submenu__item">Все задачи</Link>
                <Link to='/completed' className="submenu__item">Выполненные задачи</Link>
            </div>
        </div>
    )
}