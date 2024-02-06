import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && (
        <>
          <h2>Hi name is = {user.name} </h2>
          <h2>email is = {user.email}</h2>
          <h2> mongoid = {user.id}</h2>
        </>
      )}
    </div>
  );
};

export { Dashboard };
