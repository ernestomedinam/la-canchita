import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="portrait-login align-items-center justify-content-center">
      
        <div
        style={{ height: "100vh" }}
        className="container flex-column d-flex align-items-center justify-content-center"
        >
        <div className="row">
          <h1>Login de jugador</h1>
        </div>
        <div className="row">
          <form>
            <input
              type="text"
              name="email"
              className="form-control my-1"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="form-control my-1"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-success"
            onClick={async (e) => {
              const success = await actions.login({
                email: email,
                password: password,
              });
              if (success) {
                navigate("/private");
                return;
              }
              alert("something happened while creating");
            }}
          >
            {"Login"}
          </button>
        </div>
      </div>
    </div>
    
  );
};
