import React, {useState} from 'react';
import {useTodoLayerValue} from "../context/TodoContext";
import {Col, Row} from "react-bootstrap";
import {BiEdit} from "react-icons/bi";
import {HiOutlineTrash, HiCheck} from "react-icons/hi";

const SingleTodo = ({todo}) => {
    const [,dispatch] = useTodoLayerValue();
    const [editable, setEditable] = useState(false)
    const [content, setContent] = useState(todo.content)

    const removeTodo = (todoId) => {
      dispatch({
          type: "REMOVE_TODO",
          payload: todoId
      })
    }
    const complateTodo = (todoId) => {
      dispatch({
          type: "COMPLATE_TODO",
          payload: todoId
      })

    }
    const updateTodo = ({todoId, newValue}) => {
      dispatch({
          type: "UPDATE_TODO",
          payload: {
              todoId,
              newValue
          }
      });
      setEditable(false)
    }

    return (
        <li className="task-list-item mt-2 px-1">
            <Row className="w-100 justify-content-between m-0">
                <Col className="todo p-1" xs={12}>
                    <input className="checkbox" checked={todo.isComplated ? 'checked' : ''} type="checkbox" />
                    {
                        editable ? (
                            <input type="text" value={content} autoFocus onKeyUp={e => e.key === "Enter" ?
                                updateTodo({
                                    todoId: todo.id,
                                    newValue: content
                                })
                                : ''} onChange={event => setContent(event.target.value)} />
                        ) : (
                            <span onClick={() => editable ? '' : complateTodo(todo.id)} className={todo.isComplated ? 'task-name complated' : 'task-name'}>{todo.content}</span>
                        )
                    }
                    <div className="buttons">
                        {
                            editable ? (
                                <span>{<HiCheck className="check-btn" onClick={() => {
                                    updateTodo({
                                        todoId: todo.id,
                                        newValue: content
                                    })
                                }} />}</span>

                            ) : (
                                <>
                                    <span className="edit-btn" onClick={() => setEditable(true)}>{<BiEdit />}</span>
                                    <span className="delete-btn" onClick={() => removeTodo(todo.id)}>{<HiOutlineTrash />}</span>
                                </>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </li>
    );
}

export default SingleTodo;