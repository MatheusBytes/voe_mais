import * as Yup from "yup";

const EmpresaValidator = Yup.object().shape({
    nome: Yup.string()
    .min(3, 'o mínimo de caracteres é 3 !')
    .max(50, 'o máximo de caracteres é 50 !')
    .required('Campo obrigatório '),
  logo: Yup.string(),
  site: Yup.string().email('Invalid email').required('Required'),
});

export default EmpresaValidator;
