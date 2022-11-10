import styled from "styled-components";
import { Link } from "react-router-dom";

// --------------- GERAL ----------------

export const UpperFrame = styled.div`
    padding: 40px;
    font-size: 6vh;
    color: #fff;
    font-family: 'Montserrat';
    background-color: #4CC05F;
    h2 {
        margin-top : 100px;
        margin-left: 10vw;
    }
    @media screen and (max-width: 1055px) {
        h2 {
            margin-left: 0;
        }
    }
`

export const TextoFrame = styled.h2`
    margin-top : 100px;
    margin-left: 200px;
    @media screen and (max-width: 1050px) {
        text-align: center;
    }
`

export const DivForm = styled.div`
    margin-top: 5vh;
    margin-left: 12vw;
    margin-bottom: 20vh;
    @media screen and (max-width: 1065px) {
        display: flex;
        justify-content: center;
        margin-left: 0;
        margin-bottom: 14vh;
    }
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
    width: 50vw;
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
    margin-left: 13vw;
    margin-top: 3.5vh;
    font-size: 3vh;
    font-family: 'MontSerrat';
    color: #6B6464;
    @media screen and (max-width: 1050px) {
        text-align: center;
        margin-left: 0;
        font-size: 2.25vh;
    }
`


export const AllSignUps = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 5vh;
    @media screen and (max-width: 1050px) {
        flex-direction: column;
        align-items: center;
        margin-top: 3vh;
        margin-bottom: 5vh;
      }
`

export const SingularSignUp = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;
    @media screen and (max-width: 1050px) {
        margin-bottom: 3.5vh;
    }
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
    @media screen and (max-width: 1065px) {
        h2 {
            text-align: center;
            font-size: 5.8vh;
        }
    }
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
    background-color: #D96EAE;
    @media screen and (max-width: 1050px) {
        h2 {
            text-align: center;
            font-size: 5.8vh;
        }
    }
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
    @media screen and (max-width: 1050px) {
        h2 {
            text-align: center;
            font-size: 5.8vh;
        }

    }
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

export const InputButtonDiv = styled.div`
    width: 45%;
    display: flex;  
    flex-direction: row;
    align-items: center;
    margin-left: 2vw;    
    @media screen and (max-width: 1050px) {
        width: 60%;
        margin-left: 16vw;
    }  
`

export const ButtonBackList = styled(ButtonBack)`
    height: 2vh;
`

export const Divisor = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10vw;
    margin-bottom: 7.5vh;
    @media screen and (max-width: 865px) {
        justify-content: center;
        margin-left: 0;
    }       
`

export const InputList = styled(InputsForm)`
    width: 60%;
    height: 6vh;
    margin-top: 5vh;
    margin-left: 12vw;
    border-radius: 10px;
`

export const Card = styled.div`
    padding: 30px;
    width: 200px;
    text-align: center;
    font-family: 'Montserrat';
    background-color: #D9D9D9;
    color: #6B6464;
    font-size: 20px;
    margin-top: 6vh;
    margin-left: 80px;
    margin-bottom: 1vh;
`

// --------------- FOOTER ----------------
export const FooterStyle = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5vh;
    background-color: #c0a54c;
    font-family: 'Montserrat';
    color: white;
    bottom: 0;
    position: fixed;
    a { 
        color: #546e3f;
        text-decoration: none;
        &:hover {
            color: #5d8d37;
        }
    }
`