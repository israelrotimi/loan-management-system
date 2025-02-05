
const LoginForm = () => {
  return (
    <div className="login-form">
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
        <form action="">
            <input type="email" name="username" id="username" placeholder="Email" />
            <input type="password" name="password" id="password" placeholder="Password" />
            <small><a href="#">FORGOT PASSWORD?</a></small>
            <button type="submit">LOG IN</button>
        </form>
    </div>
  )
}

export default LoginForm
