import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./index.css";
import TodoList from './components/TodoList'

//Renamed from todosList (we had a component with the same name)
import todosArrayofObjects from "./todos.json";

class App extends Component {
  state = {
    todos: todosArrayofObjects,
  }

  handleKeyDown = (event) => {

    if(event.key === "Enter"){
      const newTodos = this.state.todos.slice()
      newTodos.push({
      userId : 1,
      id : Math.floor(Math.random() * 1000000),
      title : event.target.value,
      completed : false
    })
    this.setState({
        todos : newTodos
      })
    }
  }

  handleDestroy = (id) => {

    const updatedTodosObject = 
      this.state.todos.filter(obj => obj.id !== id)
    this.setState({
      todos : updatedTodosObject
    })
  }

  handleCheckBox = (id) => {

    const updatedTodosObject = 
      this.state.todos.map( todoItem => {
        if(todoItem.id === id)
          todoItem.completed = !todoItem.completed
        return todoItem
      })
    this.setState({
        todos : updatedTodosObject
    })
  }

  handleClearCompleted = () => {

    const updatedTodosObject = 
      this.state.todos.filter(obj => obj.completed === false)
    this.setState({
      todos : updatedTodosObject
    })
  }

  countIncomlete = () => {
    return this.state.todos
      .filter(obj => obj.completed === false)
      .length
    }


  render() {
    return (
      
      <section className="todoapp">
        <header className="header">
          
          <h1>todos</h1>
          
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={this.handleKeyDown}
          />

        </header>

        <Route exact path="/" render={() => { 
          return(
          <TodoList 
            todos={this.state.todos} 
            handleDestroy={this.handleDestroy}
            handleCheckBox={this.handleCheckBox}
          />)
        }} /> 
        <Route exact path="/active" render={() => { 
          return(
          <TodoList 
            todos={this.state.todos.filter(obj => obj.completed !== true)}
            handleDestroy={this.handleDestroy}
            handleCheckBox={this.handleCheckBox}
          />)
        }} /> 
        <Route exact path="/completed" render={() => { 
          return(
          <TodoList 
            todos={this.state.todos.filter(obj => obj.completed === true)} 
            handleDestroy={this.handleDestroy}
            handleCheckBox={this.handleCheckBox}
          />)
        }} /> 
        
        <footer className="footer">
          
          <span className="todo-count">
            {this.countIncomlete()} item(s) left
          </span>
          
          {/* Conditionally style one of these based on the rout */}
          <ul className="filters">
            <li>
              <NavLink exact to="/" activeClassName="selected"> 
                All 
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/active" activeClassName="selected"> 
                Active 
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/completed" activeClassName="selected"> 
                Completed 
              </NavLink>
            </li>
          </ul>

          <button className="clear-completed" onClick={this.handleClearCompleted}>Clear completed</button>

        </footer>
      </section>
    );
  }
}

export default App;
