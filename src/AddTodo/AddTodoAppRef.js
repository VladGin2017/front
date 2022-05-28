import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddTodoApp() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('https://dev.timetask.ru/api/Task', { userId: localStorage.getItem('token'), 
                                                        title: title, 
                                                        description: description })
        }
        return (
            <div className="register-form__container">
                <form onSubmit={handleSubmit} className='register-form__form'>
                    <input type='text' id='title' name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder='Название задачи' className="register-form__input" required></input>
                    <textarea type='text' id='description' name='description' value={description} onChange={e => setDescription(e.target.value)} placeholder='Описание задачи' className="register-form__input" rows='10' cols='50' required></textarea>
                    <input type='submit' className="btn register-form__btn"></input>
                </form>
            </div>
            
        )
    }
