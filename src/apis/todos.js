import axios from "axios";

export default axios.create({
  baseURL: "https://todo-example-backend.herokuapp.com/api/v1/todos/",
});
