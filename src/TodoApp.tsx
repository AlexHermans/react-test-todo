import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TodoList } from "./components/TodoList";
import { NewTodoForm } from "./components/NewTodoForm";
import { Navbar } from "react-bootstrap";

export function TodoApp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">To-Do App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="todoApp">
        <TodoList />
        <Row>
          <NewTodoForm />
        </Row>
      </Container>
    </>
  );
}
