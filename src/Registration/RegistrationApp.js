import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('https://dev.timetask.ru/api/Account/Register', { firstName: firstname, 
                                                        lastName: lastname, 
                                                        email: email,
                                                        password: password,
                                                        passwordConfirm: passwordConfirm })
            .then(res => {
                if (res.data === 200) {
                    localStorage.setItem('token', res.data.id);
                    navigate('/viewlist', {replace: true});
                }
            })
            .catch((error) => {
                console.error(error.toJSON);
            })
        }
        return (
            <div className="register-form__container">
                <h2 className="register-form__heading">Регистрация:</h2>
                <form onSubmit={handleSubmit} className='register-form__form'>
                    <input type='text' id='firstName' name='firstName' value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='Имя' className="register-form__input"></input>
                    <input type='text' id='lastName' name='lastName' value={lastname} onChange={e => setLastname(e.target.value)} placeholder='Фамилия' className="register-form__input"></input>
                    <input type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className="register-form__input"></input>
                    <input type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' className="register-form__input"></input>
                    <input type='password' id='passwordConfirm' name='passwordConfirm' value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder='Подтверждение пароля' className="register-form__input"></input>
                    <input type='submit' className="btn register-form__btn"></input>
                </form>
            </div>
        )
    }
