import Header from "../../components/Header/Header";
import "./Login.css";

function Login() {
  return (
    <div>
      <Header />
      <form className="container" onSubmit={""}>
          <h1 className="heading-login">Login</h1>
        <div className="container-login">
          <label htmlFor="email">Email:</label>
          <input className="input-container" type="email" id="email" name="email" required />
          <div className="container-password">
            <label htmlFor="password">Senha:</label>
            <input className="input-container" type="password" id="password" name="password" required />
          </div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
