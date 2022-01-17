import "./Login.css";

function Login() {
  return (
    <div>
      <h1>Login</h1>

      <form>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input type="text" name="uname" />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input type="password"name="psw" />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
