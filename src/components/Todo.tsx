import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteTodoAction, switchDisplayModeAction } from "../store/actions";
import { UpdateTodoForm } from "./UpdateTodoForm";
import { Check } from "react-bootstrap-icons";

export interface ITodoProps {
  index: number;
  todo: string;
}

export function Todo(props: ITodoProps) {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.todos.displayMode);

  // (null) means initialise with null as default value
  const todoRef = React.useRef<HTMLDivElement>(null);

  function onDeleteTodo(elementIndex: number) {
    dispatch(deleteTodoAction(elementIndex));
  }

  function onEditTodo(elementIndex: number) {
    dispatch(switchDisplayModeAction(elementIndex));
  }

  if (mode === "display") {
    return (
      <>
        <Row ref={todoRef} className="p-3">
          <Col>
            <Button variant="success">
              <Check></Check>
            </Button>
          </Col>
          <Col className="d-flex align-items-center" xs={9}>
            {props.todo}
          </Col>
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
  } else if (mode === "edit") {
    return (
      <>
        <UpdateTodoForm text={props.todo} index={props.index} />
      </>
    );
  } else {
    return null;
  }
}
