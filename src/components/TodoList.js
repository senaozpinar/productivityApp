import React from "react";
import TodoDetail from "./TodoDetail";
import { Col, Row } from "antd";
import { Button, Space } from "antd";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { fetchTodos } from "../actions";
import { connect } from "react-redux";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  renderTodo = (todo) => {
    return (
      <TodoDetail todo={todo} key={todo.id} onClick={this.props.onClick} />
    );
  };
  renderList = () => {
    return (
      <Row gutter={[16, 16]}>
        {this.props.todos
          .filter((todo) => {
            if (this.props.filterState === "all") return todo;
            else if (this.props.filterState === "not completed" && !todo.done)
              return todo;
            else if (this.props.filterState === "not completed" && todo.done)
              return;
            else if (this.props.filterState === "completed" && todo.done)
              return todo;
            else if (this.props.filterState === "completed" && !todo.done)
              return;
          })
          .map((todo) => {
            return this.renderTodo(todo);
          })}
      </Row>
    );
  };

  render() {
    return (
      <div>
        <Space direction="vertical" size="large" className="width100">
          <Button
            onClick={() => {
              this.props.onClick({ type: "create" });
            }}
            type="primary"
            icon={<AiOutlinePlusCircle className="add-icon" />}
            className="btn btn--add center-v"
          >
            Add TODO
          </Button>
          {this.renderList()}
        </Space>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: Object.values(state.todos) };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
