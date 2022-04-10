import { NavLink } from "react-router-dom";
import { legal, menu, social, Footer as FooterInfo } from "../helpers/contenido/es/contenido";

const Footer = () => {

  const actualDate = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__col">
        <NavLink to="/">
          <img
            src="./assets/enrique_teruel_logo-white.png"
            alt="logo"
            className="footer__logo"
          />
        </NavLink>
        <p>
          {FooterInfo.subtitle}
        </p>
      </div>

      <div className="footer__col2">
        <ul className="footer__col-list">
          {menu.map((item) => (
            <NavLink to={item.link}>
              <li className="footer__col-list-item">{item.item}</li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="footer__col2">
        <ul className="footer__col-list">
          {legal.map(item => (
            <NavLink key={item.link} to={item.link}>
              <li className="footer__col-list-item">{item.item}</li>
            </NavLink>
          ))}
        </ul>
        <div className="footer__social">
          {social.map(item => (
            <a className="footer__social" key={item.link} href={item.link}>
              {item.item}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__full">
        {FooterInfo.legal}{actualDate}<br/>
        {FooterInfo.info}
        </div>
     
    </div>
  );
};

export default Footer;
