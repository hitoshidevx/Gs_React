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
    width: 130px;
    height: 50px;
    background-color: #4CC05F;
    color: #fff;
    font-family: 'Montserrat';
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
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

export const EditButton = styled(DeleteButton)`
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
    background-color: #D96E6E
`
export const ResetLinkCompany = styled(ResetLink)`
    background-color: #D96EAE
`
export const ResetLinkVehicle = styled(ResetLink)`
    background-color: #6EC6D9
`

// --------------- Cadastro de Pessoa ----------------

export const PessoaFrame = styled(UpperFrame)`
    background-color: #D96E6E;
`
export const ButtonOkPessoa = styled(ButtonOk)`
    background-color: #D96E6E
`

// --------------- Cadastro de Empresa ----------------


export const EmpresaFrame = styled(UpperFrame)`
    background-color: #D96EAE
`

export const ButtonOkEmpresa = styled(ButtonOk)`
    background-color: #D96EAE
`

// --------------- Cadastro de Veículo ----------------


export const VeiculoFrame = styled(UpperFrame)`
    background-color: #6EC6D9;
`

export const ButtonOkVeiculo = styled(ButtonOk)`
    background-color: #6EC6D9
`

// --------------- LISTAS ----------------

export const Divisor = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
`