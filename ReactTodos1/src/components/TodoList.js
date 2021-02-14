import React from "react";
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    render() {
        return (
            <section className="main">
                <ul className="todo-list">
                    
                    {this.props.todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        title={todo.title} 
                        completed={todo.completed}
                        handleDestroy={() => this.props.handleDestroy(todo.id)}
                        handleCheckBox={() => this.props.handleCheckBox(todo.id)}
                    />

                ))}
                </ul>
            </section>
        );
    }
}

export default TodoList;
