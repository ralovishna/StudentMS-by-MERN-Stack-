import React from "react";
import loginPhoto from "../assets/login.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IoEye } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import clgImage from "../assets/clg.png";
import "../index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [User, setUser] = useState("Student");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  // console.log(email, password);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("form is submitted");

    try {
      const response = await axios.post("http://localhost:3000/login", {
        User,
        email,
        password,
      });
console.log("full response",response);

      if (response.data.status === "valid") {

        console.log("User is valid");
        navigate('/main');


      } else if (response.data.status === "invalid_password") {
        console.log("Invalid password");
        toast.error('Invalid credentials', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      } else if (response.data.status === "invalid_user") {
        toast.error('User Not Found', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        console.log("Invalid user");
      }
    } catch (err) {
      console.log("An error occurred:", err);
    }
  }

  return (<>    <ToastContainer/>
    <div className="container w-screen h-screen bg-white flex items-center ">
      <div id="left" className="h-full w-1/2 flex item-end">
        <img src={loginPhoto} alt="login image" />
      </div>
      <div
        id="right"
        className="h-[80%] rounded-[50px] w-1/2 bg-gray-200 flex flex-col items-center justify-center"
      >
        <img src={clgImage} alt="" className="w-[80%]" />
        <h1 className="text-5xl my-4">Login</h1>
        <div id="login-container  ">
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <Dropdown as={ButtonGroup} className="my-3">
              <div
                id="drpdownInput"
                className="bg-white h-10 w-[370px]  rounded text-2xl flex items-center justify-center font-semibold  "
              >
                {User}
              </div>

              <Dropdown.Toggle
                split
                variant="primary"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setUser("Student");
                  }}
                >
                  Student
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setUser("Teacher");
                  }}
                >
                  Teacher
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setUser("Admin");
                  }}
                >
                  Admin
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form.Group className=" flex flex-col " controlId="formBasicEmail">
              <Form.Label className="text-sm ">Email address</Form.Label>
              <div className="bg-white flex items-center justify-between p-2 rounded-lg h-10 w-[400px]  ">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-no-focus-border bg-transparent focus:border-transparent focus:outline-none   "
                />
                <FaUser className="" />
              </div>
            </Form.Group>
            <Form.Group
              className=" flex flex-col "
              controlId="formBasicPassword"
            >
              <Form.Label className="text-sm">Password</Form.Label>
              <div className="bg-white flex items-center justify-between p-2 rounded-lg h-10 w-[400px]  ">
                {" "}
                <Form.Control
                  type={  showPassword ? "text" : "password"}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="custom-no-focus-border bg-transparent focus:border-transparent focus:outline-none  "
                />
                <Button onClick={() => setshowPassword(!showPassword)}>
                  {showPassword ? <IoEye /> : <IoEyeOffSharp />}
                </Button>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </div>
      </div>
    </div>
    </>

  );
};

export default Login;
