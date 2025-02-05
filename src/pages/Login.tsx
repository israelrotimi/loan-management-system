import LoginForm from "../components/LoginForm"
import logo from "../assets/logo.svg"
import loginCover from "../assets/login-page-cover.png"

const Login = () => {
  return (
    <div className="wrapper">
      <div>
        <img src={logo} alt="lendsqr"/>
        <img src={loginCover} alt="cover image" />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login