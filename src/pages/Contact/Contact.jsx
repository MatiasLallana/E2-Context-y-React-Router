import * as s from "./ContactStyles";

function Contact() {
  return (
    <s.contactContainer>
      <s.contactTitle>Contactanos!</s.contactTitle>
      <s.formContainer>
        <s.contactText>
          Si tienes alguna duda, comentario o sugerencia, no dudes en
          contactarnos.
        </s.contactText>
        <s.form>
          <s.formInput type="text" placeholder="Nombre" />
          <s.formInput type="text" placeholder="Apellido" />
          <s.formInput type="email" placeholder="Email" />
          <s.textarea placeholder="DEJANOS TU MENSAJE" />
          <s.button>Enviar</s.button>
        </s.form>
      </s.formContainer>
    </s.contactContainer>
  );
}

export default Contact;
