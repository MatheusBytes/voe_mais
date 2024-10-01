"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

export default function Page() {
  const empresas = JSON.parse(localStorage.getItem("empresas")) || [];

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
        const dados = empresas.filter(item => item.id != id)
        localStorage.setItem('empresas', JSON.stringify(dados))
        setEmpresas(dados)
    }
}
  return (
    <Pagina titulo="Empresas">
      <Link href="/empresas/create" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Companhias</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((item,i ) => (
            <tr key={item.id}>
              <td>
                {item.id} - 
              <FaRegEdit  className="text-primary"/>
              <AiOutlineDelete className='text-danger'
              name="deletar"

              />
              </td>
              <td>{item.nome}</td>
              <td>
                <a href={item.site} target="_blank">
                  <img src={item.logo} width={100} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}