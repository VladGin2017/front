import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoListCompletedItem from "./TodoListComplitedItem";
import Loader from "../Loader";
import SubMenu from "../SubMenu/SubMenu";

export default function TodoListCompleted() {
    const [completedTodos, setCompletedTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        axios.get('https://dev.timetask.ru/api/Task/Completed', {
            params: {UserId: localStorage.getItem('token')}
        })
        .then(response => {
            const completedTodos = response.data;
            setCompletedTodos(completedTodos);
            setLoading(false);
        })
    }, [])

        return(
            <div className="todo-list">
                <SubMenu></SubMenu>
                <div className="todo-list__container">
                    {loading && <Loader></Loader>}
                    <ul className="todo-list__list">
                        {completedTodos.length ? (<div>
                            {completedTodos.map((completedTodos, index) => {
                                return <TodoListCompletedItem completedTodos={completedTodos} key={completedTodos.id} index={index}></TodoListCompletedItem>
                            }) }
                            </div>) : loading ? null : (<p className="todo-list__is-null">Вы еще не выполнили ни одной задачи</p>)}
                    </ul>
                </div>
            </div>
        )
    }