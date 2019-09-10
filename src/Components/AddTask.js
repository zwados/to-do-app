import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: new Date().toISOString().slice(0, 10)
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleChecked = () => {
        const checked = this.state.checked;
        this.setState({
            checked: !checked
        })
    }

    handleClick = () => {
        const { text, date, checked } = this.state;
        if (text.length < 6) {
            alert('Task name is too short');
        }
        const add = this.props.add(text, date, checked);
        if (add) {
            this.setState({
                text: '',
                checked: false,
                date: new Date().toISOString().slice(0, 10)
            })
        }

    }



    render() {

        const minDate = new Date().toISOString().slice(0, 10);
        return (
            <div className="addTaskForm">
                <input type="text" placeholder="Add new task" value={this.state.text} onChange={this.handleText} />
                <input type='checkbox' checked={this.state.checked} id="important" onChange={this.handleChecked} />
                <label htmlFor="important">Priority</label>
                <label htmlFor="dueDate">Due date</label>
                <input type="date" id="dueDate" value={this.state.date} min={minDate} onChange={this.handleDate} />
                <button onClick={this.handleClick}>Add task</button>
            </div>
        );
    }
}

export default AddTask;