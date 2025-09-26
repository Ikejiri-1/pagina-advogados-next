"use client";

import { Formik } from "formik";
import * as Yup from "yup";

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
        <form
          className="flex flex-col items-center w-[90%] max-w-3xl mx-auto my-20 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Nome */}
          <div className="flex flex-col w-full">
            <label htmlFor="username" className="ml-2 mb-1 font-medium">
              Nome
            </label>
            <input
              type="text"
              name="username"
              placeholder="Digite seu nome"
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && (
              <span className="text-red-500 mt-1">{errors.username}</span>
            )}
          </div>

          {/* Telefone */}
          <div className="flex flex-col w-full">
            <label htmlFor="tel" className="ml-2 mb-1 font-medium">
              Telefone
            </label>
            <input
              type="tel"
              name="tel"
              placeholder="Digite seu telefone"
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tel}
            />
            {errors.tel && touched.tel && (
              <span className="text-red-500 mt-1">{errors.tel}</span>
            )}
          </div>

          {/* E-mail */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="ml-2 mb-1 font-medium">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 mt-1">{errors.email}</span>
            )}
          </div>

          {/* Mensagem */}
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="ml-2 mb-1 font-medium">
              Mensagem
            </label>
            <textarea
              name="message"
              placeholder="Digite sua mensagem"
              className="w-full p-4 h-40 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium"
          >
            Entre em contato
          </button>
        </form>
      )}
    </Formik>
  );
}
