import React from 'react';

const Task = (props) => {

    const { text, date, id } = props.task

    return (
        <div>
            <p>
                <strong>{text}</strong> - do <span>{date}</span>

            </p>
            <button onClick={() => props.change(id)}>Zostało zrobione</button>
            <button onClick={() => props.delete(id)}>X</button>
        </div>
    );
}

export default Task;