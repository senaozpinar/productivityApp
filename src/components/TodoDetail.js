import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { Col } from "antd";
import { editTodo, deleteTodo, toggleTodo } from "../actions";
import { connect } from "react-redux";
import { Card } from "antd";

class TodoDetail extends React.Component {
  todoCheck = () => {
    this.props.toggleTodo(this.props.todo);
  };
  render() {
    return (
      <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
        <Card
          size="small"
          className="todo-detail"
          title={
            <div className="center-v">
              <span
                className="todo-detail__checkbox center-v"
                onClick={this.todoCheck}
              >
                {this.props.todoDone ? (
                  <BiCheckCircle className="checkbox-icon checkbox-icon--full" />
                ) : (
                  <BiCircle className="checkbox-icon" />
                )}
              </span>
              {this.props.todo.definition}
            </div>
          }
          extra={
            <div className="todo-detail__icon-box">
              <a href="#">
                <BiEditAlt
                  className="todo-detail__edit-icon"
                  onClick={() => {
                    this.props.onClick({ type: "edit", todo: this.props.todo });
                  }}
                />
              </a>
              <a href="#">
                <AiOutlineDelete
                  className="todo-detail__delete-icon"
                  onClick={() => this.props.deleteTodo(this.props.todo.id)}
                />
              </a>
            </div>
          }
        >
          <div className="todo-detail__content">
            <p>{this.props.todo.comment}</p>
          </div>
        </Card>
      </Col>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { todoDone: state.todos[ownProps.todo.id].done };
};
export default connect(mapStateToProps, { editTodo, deleteTodo, toggleTodo })(
  TodoDetail
);
