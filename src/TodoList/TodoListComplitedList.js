import React from "react";
import axios from "axios";
import TodoListCompletedItem from "./TodoListComplitedItem";
import Loader from "../Loader";
import SubMenu from "../SubMenu/SubMenu";

export default class TodoListCompleted extends React.Component {
    state = {
        completedTodos: [],
    }

    componentDidMount() {
        axios.get('https://dev.timetask.ru/api/Task/Completed', {
            params: {UserId: localStorage.getItem('token')}
        })
        .then(response => {
            const completedTodos = response.data;
            this.setState({completedTodos});
        })
    }
    render() {
        return(
            <div className="todo-list">
                <SubMenu></SubMenu>
                <div className="todo-list__container">
                    {this.state.loading && <Loader></Loader>}
                    <ul className="todo-list__list">
                        {this.state.completedTodos.length ? (<div>
                            {this.state.completedTodos.map((completedTodos, index) => {
                                return <TodoListCompletedItem completedTodos={completedTodos} key={completedTodos.id} index={index}></TodoListCompletedItem>
                            }) }
                            </div>) : this.state.loading ? null : (<p className="todo-list__is-null">Вы еще не выполнили ни одной задачи</p>)}
                    </ul>
                </div>
            </div>
        )
    }
}