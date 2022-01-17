function Contact() {
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <div className="container">
          <form action="">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
            />

<label htmlFor="email"><b>Email</b></label>
    <input type="text" name="email"/>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
