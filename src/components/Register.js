import "./register.css";
function Register(){
    return(
        <>
        <div>
         <form action="">
  <div className="container">
    <h1>Sign Up</h1>
    <p>Create An Account</p>
    <hr/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" name="email"/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" name="psw"/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" name="psw-repeat"/>

    <div>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
        </div>
           
        </>
    )
}
export default Register