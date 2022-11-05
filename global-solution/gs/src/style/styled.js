import styled from "styled-components";
import { Link } from "react-router-dom";

// --------------- GERAL ----------------

export const UpperFrame = styled.div`
    margin: 0px;
    padding: 40px;
    font-size: 50px;
    color: #fff;
    font-family: 'Montserrat';
    background-color: #4CC05F;
    h2 {
        margin-top : 100px;
        margin-left: 200px;
    }
`

export const TextoFrame = styled.h2`
    margin-top : 100px;
    margin-left: 200px;
`

export const DivForm = styled.div`
    margin-top: 50px;
    margin-left: 250px;
`

export const DivLabel = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    font-size: 35px;
    color: #6B6464;
`

export const DivLabelBelow = styled(DivLabel)`
    margin-top: 40px;
`

export const InputsForm = styled.input`
    width: 800px;
    height: 35px;
    background-color: #D9D9D9;
    text-decoration: none;
    border: none;
    box-shadow: none;
    outline: none;
    padding-left: 15px;
    font-family: 'Montserrat';
`
export const ButtonOk = styled.button`
    margin-top: 40px;
    width: 100px;
    height: 50px;
    background-color: #4CC05F;
    color: #fff;
    font-family: 'Montserrat';
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export const ButtonBack = styled(Link)`
    margin-top: 40px;
    margin-left: 30px;
    padding: 15px;
    background-color: #915050;
    color: #fff;
    font-family: 'Montserrat';
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: #6c3232;
    }
`

export const DeleteButton = styled.button`
    padding: 10px;
    text-decoration: none;
    color: #fff;
    width: 50%;
    background-color: #D96E6E;
    font-family: 'Montserrat';
    font-size: 20px;
    text-align: center;
    border: none;
    cursor: pointer;
`

export const EditButton = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: #fff;
    width: 50%;
    background-color: #D96E6E;
    font-family: 'Montserrat';
    font-size: 20px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: #CFA464;
`

// --------------- HOME ----------------

export const Chooseh3 = styled.h3`
    margin-left: 240px;
    margin-top: 50px;
    font-size: 35px;
    font-family: 'MontSerrat';
    color: #6B6464;
`

export const AllSignUps = styled.div`
    display: flex;
    justify-content: space-evenly;
    marginTop: 60px;
`

export const SingularSignUp = styled.div`
    display: flex;
    flex-direction: column;
`

export const ResetLink = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: #fff;
    margin-top: 40px;
    width: 250;
    font-family: 'Montserrat';
    font-size: 20px;
    text-align: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export const ResetLinkPerson = styled(ResetLink)`
    background-color: #D96E6E;
    &:hover {
        background-color: #e04f4f
    }
`
export const ResetLinkCompany = styled(ResetLink)`
    background-color: #D96EAE;
    &:hover {
        background-color: #bb448b
    }
`
export const ResetLinkVehicle = styled(ResetLink)`
    background-color: #6EC6D9;
    &:hover {
        background-color: #4c9fb1
    }
`

// --------------- Cadastro de Pessoa ----------------

export const PessoaFrame = styled(UpperFrame)`
    background-color: #D96E6E;
`
export const ButtonOkPessoa = styled(ButtonOk)`
    background-color: #D96E6E;
    &:hover {
        background-color: #c04b4b
    }
`
export const ButtonListPessoa = styled(ButtonBack)`
    background-color: #c04b4b;
    &:hover {
        background-color: #9f2d2d
    }
`

// --------------- Cadastro de Empresa ----------------


export const EmpresaFrame = styled(UpperFrame)`
    background-color: #D96EAE
`

export const ButtonOkEmpresa = styled(ButtonOk)`
    background-color: #D96EAE;
    &:hover {
        background-color: #b1558c
    }
`

export const ButtonListEmpresa = styled(ButtonBack)`
    background-color: #b1558c;
    &:hover {
        background-color: #9e4078
    }
`

// --------------- Cadastro de Veículo ----------------


export const VeiculoFrame = styled(UpperFrame)`
    background-color: #6EC6D9;
`

export const ButtonOkVeiculo = styled(ButtonOk)`
    background-color: #6EC6D9;
    &:hover {
        background-color: #34a9c3;
    }
`
export const ButtonListVeiculo = styled(ButtonBack)`
    background-color: #34a9c3;
    &:hover {
        background-color: #2c8a9f;
    }
`

// --------------- LISTAS ----------------

export const Divisor = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10vw;    
`

export const Card = styled.div`
    padding: 30px;
    width: 200px;
    text-align: center;
    font-family: 'Montserrat';
    background-color: #D9D9D9;
    color: #6B6464;
    font-size: 20px;
    margin-top: 100px;
    margin-left: 80px;
`