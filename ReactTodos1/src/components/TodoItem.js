import React from "react";

class TodoItem extends React.Component {
    
    render() {

        return (
            <li className={this.props.completed ? "completed" : ""}>
                <div className="view">
                    <input
                    className="toggle"
                    type="checkbox"
                    checked={this.props.completed}
                    onChange={this.props.handleCheckBox}
                    />

                    <label>{this.props.title}</label>
                    <button className="destroy"
                        onClick={this.props.handleDestroy}/>
                </div>
            </li>
        );
    }
}

export default TodoItem;
