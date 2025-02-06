import LoginForm from "../components/LoginForm"
import logo from "../assets/logo.svg"
import loginCover from "../assets/login-page-cover.png"

const Login = () => {
  return (
    <div className="wrapper">
      <div className="login-image-container">
        <img src={logo} alt="lendsqr" className="logo" />
        <img src={loginCover} alt="cover image" />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login