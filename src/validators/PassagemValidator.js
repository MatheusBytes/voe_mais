import * as Yup from "yup";

const PassagemValidator = Yup.object().shape({
    numero: Yup.number()
        .required('Campo obrigatório'),
    classe: Yup.string()
        .required('Campo obrigatório'),
    preco: Yup.number()
        .required('Campo obrigatório')
        .min(0, 'O preço deve ser positivo'),
    id_voo: Yup.number()
        .required('Campo obrigatório'),
    id_passageiro: Yup.number()
        .required('Campo obrigatório'),
});

export default PassagemValidator;
