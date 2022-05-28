import React from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

export default class AuthUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email,this.state.password);
        axios.post('https://dev.timetask.ru/api/Account/Login', {  
                                                        email: this.state.email,
                                                        password: this.state.password,})
            .then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem('token', res.data.id);
                console.log(localStorage.getItem('token'));
                if (res.data.errors) {
                    alert(res.data.errors);
                }
                if (res.data.id) {
                    
                }
            })
        }
    
    render() {
            return (
                <div className="register-form__container">
                    <h2 className="register-form__heading">Вход:</h2>
                    <form onSubmit={this.handleSubmit} className='register-form__form'>
                        <input type='email' id='email' name='email' value={this.state.email} onChange={this.handleChangeEmail} placeholder='Email' className="register-form__input"></input>
                        <input type='password' id='password' name='password' value={this.state.password} onChange={this.handleChangePassword} placeholder='Пароль' className="register-form__input"></input>
                        <input type='submit' className="btn register-form__btn"></input>
                    </form>
                </div>
            )
        }
}