function Login() {
  return(
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Trols</span>
        <span className="title">Trols</span>
        <form>
          <input type="email" placeholder="Trols"/>
          <input type="password" placeholder="Trols"/>
          <button>Trols</button>
        </form>
        <p>Don't have an account? Sign up</p>
      </div>
    </div>
  );
}

export default Login;