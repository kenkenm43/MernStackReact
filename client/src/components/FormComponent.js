import { useState } from "react";
import NavbarComponent from "./NabarComponent";
import axios from "axios";
import Swal from "sweetalert2";

const FormComponent = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
  });
  const { title, content, author } = state;

  //define state
  const inputValue = (name) => (event) => {
    // console.log(name, "=", event.target.value);
    setState({ ...state, [name]: event.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/create`, {
        title,
        content,
        author,
      })
      .then((res) => {
        Swal.fire("Notice", "Save data successfully", "success");
      })
      .catch((err) => {
        Swal.fire("Notice", err.response.data.error, "error");
      });
  };
  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>Write an article</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={inputValue("title")}
          />
          <label>Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={inputValue("content")}
          />
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={inputValue("author")}
          />
        </div>
        <br />
        <input type="submit" value="save" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default FormComponent;
