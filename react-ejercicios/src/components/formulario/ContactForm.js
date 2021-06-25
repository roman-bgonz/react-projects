import React from 'react';
import { useForm } from '../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: '',
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p className="error-p">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p className="error-p">{errors.email}</p>}

        {/* El nombre en el atributo name debe coincidir con el nombre en el objecto form */}
        <input
          type="text"
          name="subject"
          placeholder="Escribe el asunto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p className="error-p">{errors.subject}</p>}

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentatios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p className="error-p">{errors.comments}</p>}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
