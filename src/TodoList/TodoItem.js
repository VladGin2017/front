import React, {useContext, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TodoItem(props) {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    function completeTodo(todoid) {
        axios.put('http://dev.timetask.ru/api/Task/Completed/' + todoid)
        console.log(todoid)
        setChecked(!checked);
        if (!checked) {
            navigate('/viewlist');
        }
    }
    return (
        <li className="todo-list__item">
            <strong className="indef-of-task">{props.index + 1}.</strong>
            <span className="todo-list__item__container">
                <div>
                    <h1 className="todo-list__item__container__title">{props.todos.title}</h1>
                    <p className="todo-list__item__container__description">{props.todos.description}</p>
                </div>
            </span>
            <button className="btn-change-task" onClick={ () => console.log(props.todos.id)}>Редактировать</button>
            <input type='checkbox' className="chk-box__done" checked={checked} onChange={ () => completeTodo(props.todos.id)}></input>
        </li>
    )
}
