import React from "react";
import axios from "axios";
import { useLocation} from "react-router-dom";

export default class AddTodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            done: '',
        };
        
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    }
    handleChangeBody = (e) => {
        this.setState({ description: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log( this.state.title, this.state.description);
        axios.post('https://dev.timetask.ru/api/Task', { userId: localStorage.getItem('token'), 
                                                        title: this.state.title, 
                                                        description: this.state.description })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.status);
                console.log(localStorage.getItem('token'));
            })
            .catch((error) => {
                console.error(error.toJSON);
            })
        }
    render() {
        return (
            <div className="register-form__container">
                <form onSubmit={this.handleSubmit} className='register-form__form'>
                    <input type='text' id='title' name='title' value={this.state.title} onChange={this.handleChangeTitle} placeholder='Название задачи' className="register-form__input" required></input>
                    <textarea type='text' id='description' name='description' value={this.state.description} onChange={this.handleChangeBody} placeholder='Описание задачи' className="register-form__input" rows='10' cols='50' required></textarea>
                    <input type='submit' className="btn register-form__btn"></input>
                </form>
            </div>
            
        )
    }

}