import React from "react";
import { Modal, Input, Space } from "antd";
import { fetchTodo } from "../actions";
import { connect } from "react-redux";
const { TextArea } = Input;

class MyModal extends React.Component {
  state = {
    definition: "",
    comment: "",
  };

  componentDidMount() {
    if (this.props.modalInfo.type === "edit") {
      this.setState({
        definition: this.props.modalInfo.todo.definition,
        comment: this.props.modalInfo.todo.comment,
      });
    }
  }

  render() {
    return (
      <Modal
        title={
          this.props.modalInfo.type === "create" ? "Add Todo" : "Edit Todo"
        }
        visible={this.props.visible}
        onOk={() => this.props.onOk(this.state, this.props.modalInfo.todo?.id)}
        onCancel={this.props.onCancel}
        cancelButtonProps={{
          style: {
            color: "rgb(57, 57, 57)",
            borderColor: "rgb(147, 147, 148)",
          },
        }}
        okButtonProps={{
          style: { backgroundColor: "rgb(207, 155, 113)", border: "none" },
        }}
      >
        <form>
          <Space direction="vertical" style={{ width: "100%" }}>
            <div>
              <label>Definition</label>
              <Input
                placeholder="Please enter a definition"
                value={this.state.definition}
                onChange={(e) => this.setState({ definition: e.target.value })}
                className="border-none"
              />
            </div>
            <div>
              <label>Comment</label>
              <TextArea
                placeholder="Please enter a comment"
                value={this.state.comment}
                onChange={(e) => this.setState({ comment: e.target.value })}
                className="border-none"
              />
            </div>
          </Space>
        </form>
      </Modal>
    );
  }
}

export default connect(null, { fetchTodo })(MyModal);
