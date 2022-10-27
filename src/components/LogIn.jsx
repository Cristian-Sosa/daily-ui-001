import "../assets/styles/css/LogIn-dist.css";

import Logo from "./Logo";
import Form from "./Form";

function LogIn() {
  return (
    <>
      <section className="LogIn">
        <Logo />
        <span className="LogIn_caption">
          Descubre nueva música de artistas independientes
        </span>
        <Form />
      </section>
    </>
  );
}
export default LogIn;
