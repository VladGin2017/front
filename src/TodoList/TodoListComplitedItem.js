import axios from "axios";
import React from "react";

export default function TodoListCompletedItem(props) {
    return (
        <li className="todo-list__item">
            <strong className="indef-of-task">{props.index + 1}.</strong>
            <span className="todo-list__item__container">
                <div>
                    <h1 className="todo-list__item__container__title">{props.completedTodos.title}</h1>
                    <p className="todo-list__item__container__description">{props.completedTodos.description}</p>
                </div>
            </span>
            <button className="btn-change-task" onClick={ () => console.log(props.completedTodos.id)}>Редактировать</button>
            <input type='checkbox' className="chk-box__done" onChange={ () => axios.put('https://dev.timetask.ru/api/Task/NotCompleted/' + props.completedTodos.id)}></input>
        </li>
    )
}