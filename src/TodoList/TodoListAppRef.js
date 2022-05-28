import React, { useEffect, useState } from "react"
import axios from "axios"
import TodoItem from "./TodoItem"
import Loader from "../Loader"
import SubMenu from "../SubMenu/SubMenu"
import AddTodoFunc from "../AddTodo/AddTodoFunc"

export default function TodoListApp()  {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get('https://dev.timetask.ru/api/Task', {
            params: {UserId: localStorage.getItem('token')}
        })
        .then(response => {
            const todosList = response.data;
            setTodos(todosList);
            setLoading(false);
        })
    }, [])

    return (
            <div className="todo-list">
                <SubMenu></SubMenu>
                <div className="todo-list__container">
                    {loading && <Loader></Loader>}
                    <ul className="todo-list__list">
                        {todos.length ? (<div>
                            {todos.map((todos, index) => {
                                return <TodoItem todos={todos} key={todos.id} index={index}></TodoItem>
                            }) }
                            </div>) : loading ? null : (<p className="todo-list__is-null">Ваш список задач пуст.</p>)}
                    </ul>
                    <AddTodoFunc></AddTodoFunc>
                </div>
            </div>
    )
    }
