import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="container"
    style={{
      backgroundImage: 'linear-gradient(75deg,  darkblue, lightblue'
    }}>
      <div className="row">
        <div className="col-md-4 col-sm-10 mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
