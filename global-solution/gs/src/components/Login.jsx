import React, { useState } from 'react';

// import { Container } from './styles';

export default function Login() {

    const [usuario, setUsuario] = useState({
        login: "",
        senha: ""
    })

    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    }

    const logar = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(usuario)
        }

        const response = await fetch(
            "http://localhost:8080/GsAPI/rest/login/",
            requestOptions
        )
        
        const data = await response.json();

        if(data.login) {
            sessionStorage.setItem("usuario-validado", data.login)
            window.location = "/home"
        } else {
            alert("Usuário não encontrado na database!")
        }
    }

    const loginFrame = {
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

    const divForm = {
        marginTop: 50,
        marginLeft: 250
    }

    const divUsuario = {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Montserrat',
        fontSize: 35,
        color: '#6B6464'
    }

    const inputs = {
        width: 800,
        height: 35,
        backgroundColor: '#D9D9D9',
        textDecoration: 'none',
        border: 'none',
        boxShadow: 'none',
        outline: 'none',
        paddingLeft: 15,
        fontFamily: 'Montserrat'
    }

    const divSenha = {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Montserrat',
        fontSize: 35,
        color: '#6B6464',
        marginTop: 40
    }

    const buttonOk = {
        marginTop: 40,
        width: 130,
        height: 50,
        backgroundColor: '#4CC05F',
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: 20,
        border: 'none',
        borderRadius: 10,
        cursor: 'pointer'
    }

  return(
    <div>
        <div id="loginFrame" style={loginFrame}>
            <h2 style={textoFrame} >Login</h2>
        </div>
        <div style={divForm}>
            <form onSubmit={logar}>
                <div style={divUsuario} >
                    <label htmlFor="idLogin">Usuário</label>
                    <input 
                        type="text"
                        name="login"
                        id="idLogin"
                        value={usuario.login}
                        style={inputs}
                        onChange={handleChange}
                    />
                </div>
                <div style={divSenha}>
                <label htmlFor="idSenha">Senha</label>
                    <input 
                        type="password"
                        name="senha"
                        id="idSenha"
                        value={usuario.senha}
                        style={inputs}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button style={buttonOk}>Logar!</button>
                </div>
            </form>
        </div>
    </div>
  )
}