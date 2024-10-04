'use client'


import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function Page() {

    const route = useRouter()

    const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || []
    const dados = aeroportos.find(item=>item.id == params.id)
    const aeroporto = dados || { nome: '', sigla: '', UF: '', Cidade: '', Pais: "", }


    function salvar(dados) {

        if(aeroporto.id){
            Object.assign(aeroporto, dados)

        } else {
            dados.id = v4()
            aeroporto.push(dados)
        }
       
        localStorage.setItem('aeroporto', JSON.stringify(aeroportos))
        return route.push('/aeroporto')
    
    }
    }

    return (
        <Pagina titulo="aeroporto">

            <Formik
                initialValues={aeroporto}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange('nome')}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="sigla">
                            <Form.Label>sigla</Form.Label>
                            <Form.Control
                                type="text"
                                name="sigla"
                                value={values.sigla}
                                onChange={handleChange('sigla')}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="UF">
                            <Form.Label>UF</Form.Label>
                            <Form.Control
                                type="text"
                                name="UF"
                                value={values.UF}
                                onChange={handleChange('UF')}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Cidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control
                                type="text"
                                name="Cidade"
                                value={values.Cidade}
                                onChange={handleChange('Cidade')}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Pais">
                            <Form.Label>País</Form.Label>
                            <Form.Control
                                type="text"
                                name="Pais"
                                value={values.Pais}
                                onChange={handleChange('Pais')}
                            />
                        </Form.Group>




                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/aeroporto"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )

