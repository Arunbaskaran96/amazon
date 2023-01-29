import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: () => {},
    onSubmit: async (values) => {
      const login = await axios.post("http://localhost:8000/login", values);
      window.localStorage.setItem("token", login.data.token);
      nav("/portal/home");
    },
  });
  return (
    <div className="login-container" style={{ backgroundColor: "gray" }}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label style={{ color: "whitesmoke", marginLeft: "80px" }}>
            Email
          </label>
          <br></br>
          <input
            className="form-control"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
          ></input>
          <br></br>
          <label style={{ color: "whitesmoke", marginLeft: "65px" }}>
            Password
          </label>
          <br></br>
          <input
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
          ></input>
          <br></br>
          <input
            className="form-control btn btn-primary btn-sm"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
      <div>
        <Link
          to="/register"
          className="btn btn-info "
          style={{ margin: "5px", backgroundColor: "gray" }}
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}

export default Login;
