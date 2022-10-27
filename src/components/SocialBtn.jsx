function SocialBtn() {
    const btns = [
      {
        nombre: "Ingresar con Google",
        src: "./src/assets/icons/google-logo.svg",
        alt: "icono de google",
        key: "google",
      },
      {
        nombre: "Ingresar con Facebook",
        src: "./src/assets/icons/facebook-logo.svg",
        alt: "icono de facebook",
        key: "Facebook",
      },
    ];
  
    return (
      <>
        {btns.map((btn) => {
          return (
            <a className="Form_btn-ouline" href="#" target="_blank" rel="noopener noreferrer" key={btn.key}>
              <img src={btn.src} alt={btn.alt} />
              {btn.nombre}
            </a>
          );
        })}
      </>
    );
  }
  export default SocialBtn;
  