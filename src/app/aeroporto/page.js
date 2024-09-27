"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";

export default function Page() {
  const aeroporto = JSON.parse(localStorage.getItem("aeroporto")) || [];

  return (
    <Pagina titulo="aeroporto">
      <Link href="/aeroporto/create" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>nome</th>
            <th>sigla</th>
            <th>UF</th>
            <th>Cidade</th>
            <th>Pais</th>
          </tr>
        </thead>
        <tbody>
          {aeroporto.map((item) => (
            <tr>
              <td>1</td>
              <td>{item.nome}</td>
              <td>{item.sigla}</td>
              <td>{item.UF}</td>
              <td>{item.Cidade}</td>
              <td>{item.Pais}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
