import Key from "../../auth/Key";
import Logo from "../../elements/logo/Logo";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { IoIosCheckboxOutline } from "react-icons/io";
import Button from "../../elements/button/Button";
function Login() {
  const keepMeLogin = Key((state)=>state.keepMeLogin);
  const setIsAdmin = Key((state)=>state.setIsAdmin);
  const setKeepMeLogin = Key((state)=>state.setKeepMeLogin);
  const setIsLogin = Key((state) => state.setIsLogin);
  const navigate = useNavigate();
  // const handle = () => {
  //   setIsLogin(true);
  //   navigate("/home");
  // };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleKeepMeLogin = () => {
    setKeepMeLogin(!keepMeLogin);
  };
  const[username, setUsername]=useState("");
  const[password, setPassword]=useState("");
  const handleUsername=(event)=>{
    setUsername(event.target.value);
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }
  const handleFormSubmit = (event)=>{
    if(username===''||password===''){
      event.preventDefault();
      alert("Please, will in the required fields!");
    }
    else{
      if(username==='whoami'&&password==='admin'){
        alert("Welcome Admin!");
        setIsAdmin(true);
        setIsLogin(true);
        navigate("/home/dashboard");
      }
      else if(username==='whoami'&&password==='user'){
        alert("Welcome User!");
        setIsAdmin(false);
        setIsLogin(true);
        navigate("/home/dashboard");
      }
      else{
        alert("Please, fill in the correct credentials!");
      }
    }
  }
  return (
    <div className="login-container">
      <Logo />
      <form action="/login" onSubmit={handleFormSubmit} className="form-container-login">
        <label className="label-user" htmlFor="username">Username</label>
        <input value={username} onChange={handleUsername}
          id="username"
          type="text"
          placeholder="Username"
          autoComplete="username"
        />
        <div className="login-wrap-password">
          <label htmlFor="password">Password</label>
          <Link className="forgot-password" to="/password-reset">Forgot Password?</Link>
        </div>
        <input value={password} onChange={handlePassword}
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Enter your password"
          className="password-input"
        />
        <span
          className="password-toggle-icon"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
        </span>
        <span className="login-checkbox" onClick={toggleKeepMeLogin}>{!keepMeLogin?<IoIosCheckboxOutline className="login-eye-icon"/>:<FaSquareCheck className="login-eye-icon"/>}
          <span>Keep me logged in for 2 days</span>
        </span>
        <Button type="submit" content="Login" classname=""/>
      </form>
    </div>
  );
}

export default Login;
