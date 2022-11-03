import React from 'react';
import person from '../images/person.jpg'
import company from '../images/company.jpg'
import vehicle from '../images/vehicle.jpg'
import { Link } from 'react-router-dom';

const usuario = sessionStorage.getItem("usuario-validado")

export default function Home() {

    const homeFrame = {
        margin: 0,
        padding: 40,
        fontSize: 50,
        color: 'white',
        fontFamily: 'Montserrat',
        backgroundColor: "#4CC05F"
    }

    const textoFrame = {
        marginTop : 100,
        marginLeft: 200
    }

    const chooseh3 = {
        marginLeft: 240,
        marginTop: 50,
        fontSize: 35,
        fontFamily: 'MontSerrat',
        color: '#6B6464'
    }

    const allSignUps = {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: 60
    }

    const singularSignUp = {
        display: 'flex',
        flexDirection: 'column'
    }

    const resetLinkPerson = {
        padding: 10,
        textDecoration: 'none',
        color: 'White',
        marginTop: 40,
        width: 250,
        backgroundColor: '#D96E6E',
        fontFamily: 'Montserrat',
        fontSize: 20,
        textAlign: 'center',
        border: 'none',
        borderRadius: 10,
        cursor: 'pointer'
    }

    const resetLinkCompany = {
        padding: 10,
        textDecoration: 'none',
        color: 'White',
        marginTop: 40,
        width: 300,
        backgroundColor: '#D96EAE',
        fontFamily: 'Montserrat',
        fontSize: 20,
        textAlign: 'center',
        border: 'none',
        borderRadius: 10,
        cursor: 'pointer'
    }

    const resetLinkVehicle = {
        padding: 10,
        textDecoration: 'none',
        color: 'White',
        marginTop: 40,
        width: 250,
        backgroundColor: '#6EC6D9',
        fontFamily: 'Montserrat',
        fontSize: 20,
        textAlign: 'center',
        border: 'none',
        borderRadius: 10,
        cursor: 'pointer'
    }

  return (
    <div>
        <div style={homeFrame} >
            <h2 style={textoFrame} > Home</h2>
        </div>

        <div>
            <h3 style={chooseh3} >Olá {usuario}! Escolha um tipo de cadastro:</h3>

            <div id="allSignUps" style={allSignUps}>
                <div id="person" style={singularSignUp}>
                    <img src={person} height="240" width="240" alt="Imagem de uma pessoa estilo cartunesca" />
                    <Link to="/cadastropessoa" style={resetLinkPerson} >Pessoa</Link>
                </div>

                <div id="company" style={singularSignUp}>
                    <img src={company} height="240" width="310" alt="Várias pessoas em um só lugar" />
                    <Link to="/cadastroempresa" style={resetLinkCompany} >Empresa</Link>
                </div>

                <div id="vehicle" style={singularSignUp}>
                    <img src={vehicle} height="240" width="260" alt="Imagem de um carro vermelho ao lado de seu respectivo dono" />
                    <Link to="/cadastroveiculo" style={resetLinkVehicle} >Veículo</Link>
                </div>
            </div>

        </div>
    </div>
  )
}