"use client";

import Pagina from "@/app/components/Pagina";
import { Form, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { Formik } from "formik";

export default function Page() {
  function salvar(dados) {
    const empresas = [];
    empresas.push(dados);
    localStorage.setItem("empresas", JSON.stringify(empresas));
  }

  return (
    <Pagina titulo="Formulário">
      <Formik
        initialValues={{ nome: "", logo: "" }}
        onSubmit={(values) => salvar(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange("nome")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="logo">
              <Form.Label>logo</Form.Label>
              <Form.Control
                type="text"
                name="logo"
                value={values.logo}
                onChange={handleChange("logo")}
              />
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link href="/empresas" className="btn btn-warning ms-2">
                <IoArrowBack /> voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
