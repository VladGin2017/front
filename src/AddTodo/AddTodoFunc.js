import React from "react";
import AddTodoApp from "./AddTodoAppRef";

export default class AddTodoFunc extends React.Component {
    state = {
        isOpen: false,
    }

    render() {
        return(
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>+ Добавить</button>
                {this.state.isOpen && (
                    <button onClick={() => this.setState({isOpen: false})}>Закрыть</button>
                )}

                {this.state.isOpen && (
                    <div>
                        <AddTodoApp></AddTodoApp>
                    </div>
                )

                }
            </React.Fragment>
        )
    }
}