"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css"; // importa o CSS

interface FormValues {
  username: string;
  tel: string;
  email: string;
  message: string;
}

export function Form() {
  const initialValues: FormValues = {
    username: "",
    email: "",
    tel: "",
    message: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Formato de email: exemplo@dominio.com")
      .required("Por favor, insira um e-mail"),
    tel: Yup.string().required("Por favor, insira seu telefone"),
    username: Yup.string().required("Por favor, insira seu nome"),
  });

  const handleSubmit = (values: FormValues) => {
    const phoneNumber = "+55 12 99999-9999";
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    const message = `Olá! Me chamo ${values.username}.
Meu e-mail é: ${values.email}.
Meu telefone é: ${values.tel}.

${values.message}`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setTimeout(() => setSubmitting(false), 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="form-container" onSubmit={handleSubmit}>
          {/* Nome */}
          <div className="form-group">
            <label htmlFor="username">Nome</label>
            <input
              type="text"
              name="username"
              placeholder="Digite seu nome"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          {/* Telefone */}
          <div className="form-group">
            <label htmlFor="tel">Telefone</label>
            <input
              type="tel"
              name="tel"
              placeholder="Digite seu telefone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tel}
            />
            {errors.tel && touched.tel && (
              <span className="error">{errors.tel}</span>
            )}
          </div>

          {/* E-mail */}
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>

          {/* Mensagem */}
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              placeholder="Digite sua mensagem"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
          </div>

          {/* Botão */}
          <button type="submit" disabled={isSubmitting}>
            Entre em contato
          </button>
        </form>
      )}
    </Formik>
  );
}
