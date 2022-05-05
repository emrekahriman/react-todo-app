import React from 'react';
import SingleTodo from "./SingleTodo";

const TodoList = ({todos}) => {
    return (
        <>
            <style jsx="true">{`
            `}</style>
            <ul className="task-list">
                {
                    todos && todos.map(todo => (
                        <SingleTodo key={todo.id} todo={todo} />
                    ))
                }

            </ul>
        </>
    );
}

export default TodoList;