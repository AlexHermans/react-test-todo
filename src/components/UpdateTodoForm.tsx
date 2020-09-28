import React, { SyntheticEvent, useRef, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { saveTodoAction } from "../store/actions";
import { TTodo } from "../types/todo";

interface IUpdateTodoFormProps {
  text: string;
  index: number;
}

export function UpdateTodoForm(props: IUpdateTodoFormProps) {
  const inputRef = useRef<HTMLInputElement>(null); // (null) means initialise with null as default value
  const [text, updateText] = useState(props.text);
  const state = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  function onUpdateTodo() {
    const todoIndex = props.index;
    const todo: TTodo = {
      text: inputRef?.current?.value as string,
      editMode: false,
      isDone: state[todoIndex].isDone,
    };

    dispatch(saveTodoAction(todo, todoIndex));
  }

  return (
    <>
      <Col>
        <Button disabled variant="success">
          <Check></Check>
        </Button>
      </Col>
      <Col className="d-flex align-items-center" xs={9}>
        <Form
          inline
          onSubmit={(event: SyntheticEvent) => event.preventDefault()}>
          <Form.Control
            ref={inputRef}
            name="update-todo"
            id="update-todo"
            value={text}
            onChange={(e) => updateText(e.target.value)}
            type="text"></Form.Control>
          <Button onClick={onUpdateTodo} type="submit">
            Update item
          </Button>
        </Form>
      </Col>
    </>
  );
}
