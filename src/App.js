import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState, useEffect, useRef} from "react";
import {useTodoLayerValue} from "./context/TodoContext";
import TodoList from "./components/TodoList";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {HiOutlinePlus} from "react-icons/hi";

const App = () => {
    const [{todos}, dispatch] = useTodoLayerValue();
    const [content, setContent] = useState("");

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!content && content.length < 3) return;

        const newTodo = {
            id: Math.floor(Math.random() * 94875893456),
            content,
            isComplated: false
        }

        dispatch({
            type: "ADD_TODO",
            payload: newTodo
        })

        setContent('')
    }


    // TODO: https://codepen.io/aybukeceylan/pen/abmLNag TASARIMI UYGULA!!!

    return (
        <>
            <Row className="justify-content-md-center mt-5">
                <Col className="col-12 col-md-6">
                    <Card
                        text="white"
                        className="mb-2"
                        style={{backgroundColor: "#10101d", padding: ".5em"}}
                    >
                        <Card.Header className="fw-bold" style={{fontSize:"20px"}}>TO DO LIST</Card.Header>
                        <Card.Body>
                            <div className="add-task">
                                <Form onSubmit={handleSubmit}>
                                    <Row className="justify-content-between g-1">
                                        <Col className="col-xs-9 col-sm-10 col-md-10">
                                            <Form.Control
                                                ref={inputRef}
                                                autoComplete="off"
                                                placeholder="Add New Task"
                                                className="mb-2 add-task-input mr-0"
                                                onChange={event => setContent(event.target.value)}
                                                value={content}
                                            />
                                        </Col>
                                        <Col xs="auto">
                                            <Button style={{backgroundColor: "#ee9ca7", borderColor: "#ee9ca7"}} type="submit" className="mb-2">
                                                <HiOutlinePlus />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>

                            <TodoList todos={todos}/>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default App;