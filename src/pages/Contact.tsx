import { NavLink } from "react-router-dom";
import Form from "../components/form/Form";
import { ContactPage, InfoAside, social } from "../helpers/contenido/es/contenido";
const Contact = () => {
  return (
    <div className="form">
       <div  className="form__contact-form">
         <h2 className="title-big">{ContactPage.title}</h2>
         <p className="subtitle">{ContactPage.subtitle}</p>
         <Form />
       </div>
       <div className="form__aside">
       <h3 className="subtitle">{ContactPage.asideTitle}</h3>
       <img className="img-decoration" src="assets/eye-etg.gif" alt="eye-etg" />
       <ul className="footer__col-list">
       {InfoAside.map(item => (
            <a key={item.link} href={item.link}>
              <li className="footer__col-list-item title-medium">{item.item}</li>
            </a>
          ))}
          {social.map(item => (
            <a key={item.link} href={item.link}>
              <li className="footer__col-list-item title-medium">{item.name}</li>
            </a>
          ))}
           

        </ul>
       </div>
    </div>
  );
};

export default Contact;
