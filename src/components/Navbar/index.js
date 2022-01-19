import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import profilePhoto from "../../assets/pp.png";
import { useAuth } from "../../contexts/AuthContext";
import { NavDropdown } from "react-bootstrap";

function Navbar() {
  const { isLogin, user, logOut } = useAuth();
  return (
    <nav className={styles.nav}>
      <div className="left">
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        {!isLogin && (
          <>
            <Link to="/login">
              <button className={styles.loginButton}>login</button>
            </Link>
            <Link to="/register">
              <button className={styles.registerButton}>register</button>
            </Link>
          </>
        )}

        {isLogin && (
          <div style={{display:"flex"}}>
            <img
              src={profilePhoto}
              alt=""
              style={{ width: 50, height: 50 }}
            />
            <NavDropdown style={{top:"10px"}} title={user.username}>
              <NavDropdown.Item onClick={() => { logOut() }}> Log Out</NavDropdown.Item>
            </NavDropdown>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
