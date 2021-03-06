import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'


class App extends Component {
  counter = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: 'zrobić zakupy',
        date: '2019-09-10',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'umyć się',
        date: '2019-09-10',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'zjeść',
        date: '2019-09-10',
        important: false,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
    console.log('delete elementu o id ' + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    // let tasks = [...this.state.tasks];
    // tasks = tasks.filter(task => task.id !== id);
    //this.setState({
    //  tasks
    //})

    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text, //input value
      date: date, //input value
      important: important, //input checked
      active: true,
      finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [task, ...prevState.tasks]
    }))
    return true
  }


  render() {
    return (
      <div className="App">
        <h1>To do app</h1>
        <AddTask add={this.addTask} />
        <br></br>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div >
    );
  }
}

export default App;
