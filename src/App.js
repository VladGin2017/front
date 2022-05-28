import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import  HomePage   from './Pages/HomePage'
import  LoginPage   from './Pages/LoginPage'
import  Register   from './Pages/RegistrationPage'
import  TodoListPage   from './Pages/TodoListPage'
import AllTasks from "./Pages/AllTasks"
import TodayTask from "./Pages/TodayTask"
import CompletedTodo from "./Pages/CompletedTodo";



export default class App extends React.Component {
    render() {
    if (localStorage.getItem('token')) {
        return (
        <div>
            <header className="nav-menu">
                <div className="nav-menu__container">
                    <Link to='/' className="nav-menu__link">Главная</Link>
                    <Link to='/viewlist' className="nav-menu__link">Список задач</Link>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/viewlist" element={<TodoListPage></TodoListPage>}></Route>
                <Route path="/viewlist" element={<AllTasks></AllTasks>}></Route>
                <Route path="/today" element={<TodayTask></TodayTask>}></Route>
                <Route path="/completed" element={<CompletedTodo></CompletedTodo>}></Route>
            </Routes>
        </div>
        )
    } else {
        return (
            <div>
                <header className="nav-menu">
                    <div className="nav-menu__container">
                        <Link to='/login' className="nav-menu__link">Вход</Link>
                        <Link to='/register' className="nav-menu__link">Регистрация</Link>
                    </div>
                </header>
                <Routes>
                    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                </Routes>
            </div>
            )
    }
    }}
