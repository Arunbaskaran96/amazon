import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [enable, isEnable] = useState(false);
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    },
    validate: () => {},
    onSubmit: async (values) => {
      await axios.post("http://localhost:8000/register", values);
      isEnable(true);
      nav("/");
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <button className="btn btn-info btn-sm">Back</button>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <label>Name</label>
              <br></br>
              <label>Email</label>
              <br></br>
              <label>Password</label>
              <br></br>
              <label>Phone</label>
              <br></br>
              <label>Address</label>
              <br></br>
            </div>
            <div className="col-6">
              <input
                name="name"
                value={formik.values.name}
                type="text"
                onChange={formik.handleChange}
              ></input>
              <br></br>
              <input
                name="email"
                value={formik.values.email}
                type="text"
                onChange={formik.handleChange}
              ></input>
              <br></br>
              <input
                name="password"
                value={formik.values.password}
                type="password"
                onChange={formik.handleChange}
              ></input>
              <br></br>
              <input
                name="phone"
                type="number"
                value={formik.values.phone}
                onChange={formik.handleChange}
              ></input>
              <br></br>
              <input
                name="address"
                value={formik.values.address}
                type="text"
                onChange={formik.handleChange}
              ></input>
              <br></br>
              <input
                disabled={enable}
                className="btn btn-primary btn-sm"
                type="submit"
                Value="Submit"
                onChange={formik.handleChange}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
