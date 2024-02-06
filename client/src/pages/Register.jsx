import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register Successful. Welcome Here");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        action=""
        onSubmit={registerUser}
        style={{
          display: "flex",
          gap: "4rem",
        }}
      >
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={data.name}
          placeholder="Enter Your Name..."
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
        />
        <label htmlFor="">Email</label>
        <input
          value={data.email}
          type="email"
          placeholder="Enter Your Email..."
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        />
        <label htmlFor="">Password</label>
        <input
          value={data.password}
          type="password"
          placeholder="Enter Your Password..."
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{data.name} </h1>
      <h1>{data.email} </h1>
      <h1>{data.password} </h1>
    </div>
  );
};

export default Register;
