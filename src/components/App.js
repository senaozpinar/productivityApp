import React from "react";
import TodoList from "./TodoList";
import "antd/dist/antd.css";
import MyModal from "./MyModal";
import { createTodo, editTodo } from "../actions";
import { connect } from "react-redux";
import { Space } from "antd";
import { Filters } from "./Filters";

class App extends React.Component {
  state = { isModalVisible: false, modalInfo: {}, filterState: "all" };

  showModal = (info) => {
    this.setState({ isModalVisible: true, modalInfo: info });
    console.log("1");
  };

  handleOk = (formValues, id) => {
    this.setState({ isModalVisible: false });
    if (this.state.modalInfo.type === "create") {
      this.props.createTodo(formValues);
    } else {
      this.props.editTodo(id, formValues);
    }
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  modalCheck = () => {
    if (this.state.isModalVisible) {
      return (
        <MyModal
          modalInfo={this.state.modalInfo}
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        />
      );
    }
  };
  changeFilter = (filter) => {
    this.setState({ filterState: filter });
  };

  timeOfDay = () => {
    const time = new Date();
    const hours = time.getHours();
    if (hours < 4 && hours > 18) return "EVENING";
    if (hours > 4 && hours < 12) return "MORNING";
    if (hours > 12 && hours < 18) return "AFTERNOON";
  };

  render() {
    return (
      <div className="pd-l">
        <Space direction="vertical" className="width100">
          <div className="header">
            GOOD {this.timeOfDay()}, HERE ARE YOUR TODOS
          </div>
          <Filters
            changeFilter={this.changeFilter}
            filterState={this.state.filterState}
          />
          {this.modalCheck()}
          <TodoList
            onClick={this.showModal}
            filterState={this.state.filterState}
          />
        </Space>
      </div>
    );
  }
}

export default connect(null, { createTodo, editTodo })(App);
