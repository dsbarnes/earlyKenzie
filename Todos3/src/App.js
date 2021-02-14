import React, { Component } from "react";
import { connect } from "react-redux"
import { Route, NavLink } from "react-router-dom";
import "./index.css";
import TodoList from './components/TodoList'
import { 
  clearCompletedTodos, 
  handleCheck, 
  handleRemoveTodo, 
  handleAddTodo } 
  from "./actions/todoActions"


class App extends Component {

  handleEnter = (event) => {
    if(event.key === "Enter"){
      this.props.handleAddTodo({
        userId : 1,
        id : Math.floor(Math.random() * 1000000),
        title : event.target.value,
        completed : false
      })
    }
  }

  render() {
    return (
      
      <section className="todoapp">
        {console.log("From App.js:", this.props.todos)}
        <header className="header">
          
          <h1>todos</h1>
          
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={this.handleEnter}

          />

        </header>
        {/* <Route exact path="/" component={TodoList}/> */}

        <Route exact path="/" render={() => {
          return(<TodoList
            todos = {this.props.todos}
          />)
        }}/>

        <Route exact path="/active" render={() => { 
          return( <TodoList
            todos = {this.props.todos
              .filter(todo => todo.completed === false)}
            />)
          }}/>

        <Route exact path="/completed" render={() => { 
          return( <TodoList
            todos = {this.props.todos
              .filter(todo => todo.completed === true)}
          />)
        }}/>
        
        <footer className="footer">
          
          <span className="todo-count">
            Items Left: {this.props.todos
              .filter(todo => todo.completed === false).length}
          </span>
          
          <ul className="filters">
            <li>
              <NavLink exact to="/" 
                activeClassName="selected"> 
                  All 
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/active" 
                activeClassName="selected"> 
                  Active 
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/completed" 
                activeClassName="selected"> 
                  Completed 
              </NavLink>
            </li>
          </ul>

          <button 
            className="clear-completed" 
            onClick={this.props.clearCompletedTodos}
          >
            Clear completed
          </button>

        </footer>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos : state.todos
  }
}
const mapDispatchToProps = {
  clearCompletedTodos,
  handleCheck,
  handleRemoveTodo,
  handleAddTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
