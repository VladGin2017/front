import React from "react"
import axios from "axios"
import TodoItem from "./TodoItem"
import Loader from "../Loader"
import SubMenu from "../SubMenu/SubMenu"
import AddTodoFunc from "../AddTodo/AddTodoFunc"

export default class TodoListApp extends React.Component {
    state = {
        todos: [],
        loading: true,
    }
    
componentDidMount() {
    axios.get('https://dev.timetask.ru/api/Task', {
        params: {UserId: localStorage.getItem('token')}
    })
    .then(response => {
        console.log(response.data);
        const todos = response.data;
        this.setState({ todos, loading: false });
    })
}



render()  {
    return (
            <div className="todo-list">
                <SubMenu></SubMenu>
                <div className="todo-list__container">
                    {this.state.loading && <Loader></Loader>}
                    <ul className="todo-list__list">
                        {this.state.todos.length ? (<div>
                            {this.state.todos.map((todos, index) => {
                                return <TodoItem todos={todos} key={todos.id} index={index}></TodoItem>
                            }) }
                            </div>) : this.state.loading ? null : (<p className="todo-list__is-null">Ваш список задач пуст.</p>)}
                    </ul>
                    <AddTodoFunc></AddTodoFunc>
                </div>
            </div>
    )
    }
}