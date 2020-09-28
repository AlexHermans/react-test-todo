import React, { SyntheticEvent, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { saveTodoAction } from "../store/actions";

interface IUpdateTodoFormProps {
  text: string;
  index: number;
}

export function UpdateTodoForm(props: IUpdateTodoFormProps) {
  const inputRef = useRef<HTMLInputElement>(null); // (null) means initialise with null as default value
  const [text, updateText] = useState(props.text);

  const dispatch = useDispatch();

  function onUpdateTodo() {
    const payload = {
      todoIndex: props.index,
      updatedText: inputRef?.current?.value as string,
    };

    dispatch(saveTodoAction(payload));
  }

  return (
    <>
      <Row className="p-3">
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
      </Row>
    </>
  );
}
