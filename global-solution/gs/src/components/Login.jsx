import React, { useState } from 'react';
import { ButtonOk, DivForm, DivLabel, DivLabelBelow, InputsForm, TextoFrame, UpperFrame } from '../style/styled';
import Footer from './Footer';

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

  return(
    <div>
        <UpperFrame id="loginFrame" >
            <TextoFrame>Login</TextoFrame>
        </UpperFrame>
        <DivForm>
            <form onSubmit={logar} autoComplete="off" >
                <DivLabel >
                    <label htmlFor="idLogin">Usuário</label>
                    <InputsForm 
                        type="text"
                        name="login"
                        id="idLogin"
                        value={usuario.login}
                        onChange={handleChange}
                    />
                </DivLabel>
                <DivLabelBelow>
                <label htmlFor="idSenha">Senha</label>
                    <InputsForm 
                        type="password"
                        name="senha"
                        id="idSenha"
                        value={usuario.senha}
                        onChange={handleChange}
                    />
                </DivLabelBelow>
                <div>
                    <ButtonOk >Logar!</ButtonOk>
                </div>
            </form>
        </DivForm>
        
        <Footer />
    </div>
  )
}