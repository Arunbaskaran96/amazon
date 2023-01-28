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
    <div className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email</label>
          <br></br>
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
          ></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
          ></input>
          <br></br>
          <input
            className="btn btn-primary btn-sm"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
      <div>
        <Link
          to="/register"
          className="btn btn-info btn-sm"
          style={{ margin: "5px" }}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
