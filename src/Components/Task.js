import React from 'react';

const Task = (props) => {

    const priority = {
        color: 'red',
    }

    const { text, date, id, active, important, finishDate } = props.task
    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? priority : null}>{text}</strong> - do <span>{date}</span>

                </p>
                <button onClick={() => props.change(id)}>Completed</button>
                <button onClick={() => props.delete(id)}>X</button>
            </div>
        );
    } else {

        const finish = new Date(finishDate).toLocaleString();
        return (
            <div> <p>
                <strong>{text}</strong> - (do <span>{date}</span>)</p>
                - Completed on <span>{finish}</span>
                <button onClick={() => props.delete(id)}>X</button>
            </div>
        )
    }
}


export default Task;