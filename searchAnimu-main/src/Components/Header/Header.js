import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import React, { useContext } from "react";
import { AnimuContext } from "../../Context/AnimuContext";
import {logOut} from '../Form/Form'
const Header = () => {
  const { setForm, user } = useContext(AnimuContext);

  console.log(user)
  return (
    <header className="Header">
      <SearchBar />
      <div className="headerInfo">
        <h1>AnimusSearch</h1>
        <div className="auth">
          {user? (
            <div className="userLogin">
              <h2>{user.email}</h2>
              <button onClick={logOut}>Sign Out</button>
            </div>
          ) : (
            <div className="buttonGroup">
              <button
                onClick={() => {
                  setForm("login");
                }}
                className="login"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setForm("register");
                }}
                className="register"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
