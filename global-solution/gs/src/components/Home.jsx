import React from 'react';
import person from '../images/person.jpg'
import company from '../images/company.jpg'
import vehicle from '../images/vehicle.jpg'
import { AllSignUps, Chooseh3, FooterStyle, ResetLinkCompany, ResetLinkPerson, ResetLinkVehicle, SingularSignUp, TextoFrame, UpperFrame } from '../style/styled';
import Footer from './Footer';

const usuario = sessionStorage.getItem("usuario-validado")

export default function Home() {


  return (
    <div>
        <UpperFrame>
            <TextoFrame> Home</TextoFrame>
        </UpperFrame>

        <div>
            <Chooseh3 >Olá {usuario}! Escolha um tipo de entidade:</Chooseh3>

            <AllSignUps id="allSignUps" >
                <SingularSignUp id="person" >
                    <img src={person} height="240" width="240" alt="Imagem de uma pessoa estilo cartunesca" />
                    <ResetLinkPerson to="/cadastropessoa">Pessoa</ResetLinkPerson>
                </SingularSignUp>

                <SingularSignUp id="company" >
                    <img src={company} height="240" width="310" alt="Várias pessoas em um só lugar" />
                    <ResetLinkCompany to="/cadastroempresa">Empresa</ResetLinkCompany>
                </SingularSignUp>

                <SingularSignUp id="vehicle" >
                    <img src={vehicle} height="240" width="260" alt="Imagem de um carro vermelho ao lado de seu respectivo dono" />
                    <ResetLinkVehicle to="/cadastroveiculo">Veículo</ResetLinkVehicle>
                </SingularSignUp>
            </AllSignUps>

        </div>

        <Footer />
    </div>
  )
}