import { formInput } from "../../helpers/contenido/es/contenido";

const Form = () => {
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    console.log("send");
  };
  return (
    <form className="contact-form" action="none">
        {formInput.map((inputs) =><>
        <label htmlFor={inputs.htmlFor} >{inputs.Label}</label>
        <input name={inputs.name} type={inputs.type} placeholder={inputs.placeholder} />
        </>)}
      <button className="contact-form__btn" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
