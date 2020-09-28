import * as React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Todo } from "./Todo";

export function TodoList() {
  const todos: string[] = useSelector((state: RootState) => state.todos.list);

  console.log(todos);

  return (
    <>
      <Row className="bg-light p-3 mt-5">
        <Col>
          <strong>List of to do's:</strong>
        </Col>
      </Row>
      <ListGroup>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </ListGroup>
    </>
  );
}
