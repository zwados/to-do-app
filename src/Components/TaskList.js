import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const completed = props.tasks.filter(task => !task.active)

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const completedTasks = completed.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <React.Fragment>
            <div className="activeTasks">
                <h1>Tasks to do <em>({activeTasks.length})</em></h1>
                {activeTasks.length > 0 ? activeTasks : <p>No active tasks</p>}
            </div>

            <div className="completedTasks">
                <h1>Tasks done<em>({completedTasks.length})</em></h1>
                {completedTasks}
            </div>

        </React.Fragment>
    );
}

export default TaskList;