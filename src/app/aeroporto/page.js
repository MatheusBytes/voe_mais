"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Page() {

  const [aeroportos, setAeroporto] = useState([]);

  useEffect(() => {
    setAeroporto(JSON.parse(localStorage.getItem("aeroportos")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = aeroportos.filter((item) => item.id != id);
      localStorage.setItem("aeroporto", JSON.stringify(dados));
      setAeroporto(dados);
    }
  }

  return (
    <Pagina titulo="aeroporto">
      <Link href="/aeroporto/form" className="btn btn-primary mb-3 mt-3">
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
          {aeroportos.map((item) => (
            <tr>
              <td>1</td>
              <td>
                
                <Link href={`/aeroporto/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
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
