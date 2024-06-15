import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
// import { Button } from "antd";

function Home() {
  const { login, register, isLoading, isAuthenticated, user, logout } =
    useKindeAuth();

  return (
    <div className="p-4 sm:ml-64 mt-14 text-5xl text-black">
      {isLoading && <p>Loading ...</p>}

      {!isLoading && !isAuthenticated && (
        <>
          <button onClick={() => register()} type="button">
            Register
          </button>

          <button onClick={() => login()} type="button">
            Login
          </button>
        </>
      )}
      {!isLoading && isAuthenticated && (
        <>
          <p>{user?.given_name}</p>
          <p>{user?.email}</p>
          <img src={user?.picture} alt="user" />

          <button type="button" onClick={() => logout()}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
