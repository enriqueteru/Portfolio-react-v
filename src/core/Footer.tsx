import { NavLink } from "react-router-dom";
import { legal, menu, social } from "../helpers/contenido/es/contenido";

const Footer = () => {
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          eligendi, sapiente facilis dolor eum provident sed nostrum. Iure nam
          optio quos quam, voluptatibus rem molestiae fugiat fuga sapiente
          accusantium distinctio?
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
    </div>
  );
};

export default Footer;
