import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodoAction, switchDisplayModeAction } from "../store/actions";
import { UpdateTodoForm } from "./UpdateTodoForm";
import { Check } from "react-bootstrap-icons";
import { TTodo } from "../types/todo";

export interface ITodoProps {
  index: number;
  todo: TTodo;
}

export function Todo(props: ITodoProps) {
  const dispatch = useDispatch();

  // (null) means initialise with null as default value
  const todoRef = React.useRef<HTMLDivElement>(null);

  function onDeleteTodo(elementIndex: number) {
    dispatch(deleteTodoAction(elementIndex));
  }

  function onEditTodo(elementIndex: number) {
    dispatch(switchDisplayModeAction(elementIndex));
  }
  return (
    <>
      <Row ref={todoRef} className="p-3">
        {props.todo.editMode ? (
          <UpdateTodoForm text={props.todo.text} index={props.index} />
        ) : (
          <>
            <Col>
              <Button variant="success">
                <Check></Check>
              </Button>
            </Col>
            <Col className="d-flex align-items-center" xs={9}>
              {props.todo.text}
            </Col>
          </>
        )}
        <Col className="mr-0" xs={2}>
          <ButtonGroup>
            <Button variant={"light"} onClick={() => onEditTodo(props.index)}>
              Edit
            </Button>
            <Button
              variant={"danger"}
              onClick={() => onDeleteTodo(props.index)}>
              Delete
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </>
  );
}
