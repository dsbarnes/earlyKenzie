import React from "react";
import TodoItem from './TodoItem'
import {connect} from "react-redux"
import {
    handleCheck, 
    handleRemoveTodo
} from "../actions/todoActions"

class TodoList extends React.Component {
    render() {
        return (
            <section className="main">

            {console.log("Todos List:", this.props)}

                <ul className="todo-list">
                    
                    {this.props.todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        title={todo.title} 
                        completed={todo.completed}
                        
                        handleCheck={() => 
                            this.props
                            .handleCheck(todo.id)}

                        handleRemoveTodo={() => 
                            this.props
                            .handleRemoveTodo(todo.id)}
                    />
                    ))}

                </ul>
            </section>
        );
    }
}

// export default TodoList;
// const mapStateToProps = state => {
//     return {
//.         todos : state.todos
//     }
// }
const mapDispatchToProps = {
    handleCheck,
    handleRemoveTodo
}

export default connect(null, mapDispatchToProps)(TodoList)