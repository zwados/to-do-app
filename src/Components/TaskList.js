import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <React.Fragment>
            <div className="activeTasks">
                <h1>Lista Tasków do zrobienia</h1>
                {tasks}
            </div>

            <div className="completedTasks">
                <h1>Lista Tasków zrobionych</h1>
            </div>

        </React.Fragment>
    );
}

export default TaskList;