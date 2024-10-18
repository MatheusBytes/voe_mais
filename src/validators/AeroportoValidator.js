import * as Yup from "yup";

const AeroportoValidator = Yup.object().shape({
    nome: Yup.string()
        .min(3, 'O mínimo de caracteres é 3!')
        .max(10, 'O máximo de caracteres é 10!')
        .required('Campo obrigatório'),
    sigla: Yup.string()
        .max(5, 'O máximo de caracteres é 5!')
        .required('Campo obrigatório'),
    uf: Yup.string()
        .length(2, 'A UF deve ter 2 caracteres')
        .required('Campo obrigatório'),
    cidade: Yup.string()
        .required('Campo obrigatório'),
    pais: Yup.string()
        .required('Campo obrigatório'),
});

export default AeroportoValidator;
