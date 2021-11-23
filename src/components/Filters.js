import React from "react";
import { Button, Row } from "antd";
const Filter = (props) => {
  return (
    <Button
      className={`btn ${
        props.filterState === props.filterType ? "btn--filter" : ""
      }`}
      onClick={() => props.changeFilter(props.filterType)}
    >
      {props.filterType}
    </Button>
  );
};

class Filters extends React.Component {
  render() {
    return (
      <Row className="filters">
        <Filter
          filterState={this.props.filterState}
          changeFilter={this.props.changeFilter}
          filterType="all"
        />
        <Filter
          filterState={this.props.filterState}
          changeFilter={this.props.changeFilter}
          filterType="not completed"
        />
        <Filter
          filterState={this.props.filterState}
          changeFilter={this.props.changeFilter}
          filterType="completed"
        />
      </Row>
    );
  }
}
export { Filters, Filter };
