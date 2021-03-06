import React, { SyntheticEvent, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions";
import { TTodo } from "../types/todo";

export function NewTodoForm() {
  const inputRef = useRef<HTMLInputElement>(null); // (null) means initialise with null as default value
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function onAddTodo() {
    const newTodo: TTodo = {
      text: inputRef?.current?.value || "",
      editMode: false,
      isDone: false,
    };

    dispatch(addTodoAction(newTodo));
    setInput("");
  }

  return (
    <>
      <Form onSubmit={(event: SyntheticEvent) => event.preventDefault()}>
        <Form.Group>
          <Form.Label>Enter a new thing to do:</Form.Label>
          <Form.Control
            ref={inputRef}
            name="add-todo"
            id="add-todo"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Just start typing... "></Form.Control>
        </Form.Group>
        <Button onClick={onAddTodo} type="submit">
          Add Todo
        </Button>
      </Form>
    </>
  );
}
