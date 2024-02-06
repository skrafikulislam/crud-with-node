import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        action=""
        onSubmit={loginUser}
        style={{
          display: "flex",
          gap: "4rem",
        }}
      >
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter Your Email..."
          value={data.email}
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          value={data.password}
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{data.email} </h1>
      <h1>{data.password} </h1>
    </div>
  );
};

export default Login;
