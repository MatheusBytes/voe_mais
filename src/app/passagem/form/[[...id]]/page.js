'use client'


import Pagina from "@/app/components/Pagina";
import PassagemValidator from "@/validators/PassagemValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({params}) {

    const route = useRouter();

    const passagens = JSON.parse(localStorage.getItem('passagens')) || [];
    const dados = passagens.find(item => item.id == params.id);
    const passagem = dados || {numero: '', classe: '', preco: '', id_voo: '', id_passageiro: ''};

    function salvar(dados){

        if(passagem.id){
            Object.assign(passagem, dados);
        } else {
            dados.id = v4();
            passagens.push(dados);
        }

        localStorage.setItem('passagem', JSON.stringify(passagens));
        return route.push('/passagem');
    }

    return (
        <Pagina titulo="Passagem">
            <Formik
                initialValues={passagem}
                validationSchema={PassagemValidator}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="numero">
                            <Form.Label>Número da Passagem</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="numero" 
                                value={values.numero}
                                onChange={handleChange('numero')}
                                isInvalid={!!errors.numero}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.numero}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="classe">
                            <Form.Label>Classe</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="classe"
                                value={values.classe}
                                onChange={handleChange('classe')}
                                isInvalid={!!errors.classe}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.classe}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control 
                                type="number" 
                                name="preco"
                                value={values.preco}
                                onChange={handleChange('preco')}
                                isInvalid={!!errors.preco}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.preco}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="id_voo">
                            <Form.Label>Voo (ID)</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="id_voo"
                                value={values.id_voo}
                                onChange={handleChange('id_voo')}
                                isInvalid={!!errors.id_voo}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.id_voo}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="id_passageiro">
                            <Form.Label>Passageiro (ID)</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="id_passageiro"
                                value={values.id_passageiro}
                                onChange={handleChange('id_passageiro')}
                                isInvalid={!!errors.id_passageiro}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.id_passageiro}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/passagens"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
