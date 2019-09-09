import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
    }
    render() {
        return (
            <div className="addTaskForm">
                <input type="text" placeholder="Add new task" value={this.state.text} />
                <input type='checkbox' checked={this.state.checked} id="important" />
                <label htmlFor="important">Priority</label>
                <label htmlFor="dueDate">Due date</label>
                <input type="date" id="dueDate" value="2019-09-10" min="2019-09-10" />
            </div>
        );
    }
}

export default AddTask;