import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'
import { tsStringKeyword } from '@babel/types';

class App extends Component {
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

    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log('changedStatus elementu o ' + id);
  }


  render() {
    return (
      <div className="App">
        To do app
      <AddTask />
        <br></br>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div >
    );
  }
}

export default App;
