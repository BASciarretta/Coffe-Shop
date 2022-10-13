import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";

const Footer = () => {
  return (
    <footer className="container pt-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <Facebook />
          <Twitter />
          <Instagram />
          <p className="p-2">¡Seguinos en las redes!</p>
        </div>
        <p className="p-2">® All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
