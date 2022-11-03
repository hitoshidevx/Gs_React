import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CadastroPessoa() {
  
    const cadastroPessoaFrame = {
        margin: 0,
        padding: 40,
        fontSize: 50,
        color: 'white',
        fontFamily: 'Montserrat',
        backgroundColor: "#D96E6E"
    }

    const textoFrame = {
        marginTop : 100,
        marginLeft: 200
    }

    const divForm = {
        marginTop: 50,
        marginLeft: 250
    }

    const divLabel = {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Montserrat',
        fontSize: 35,
        color: '#6B6464'
    }

    const divLabel2 = {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Montserrat',
        fontSize: 35,
        color: '#6B6464',
        marginTop: 40
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

    const buttonOk = {
        marginTop: 40,
        width: 130,
        height: 50,
        backgroundColor: '#D96E6E',
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: 20,
        border: 'none',
        borderRadius: 10,
        cursor: 'pointer'
    }
    
    let { id } = useParams()

    const [ novo, setNovo ] = useState({
        codigo: id,
        nomePessoa:"",
        sobreMim:"",
        rgPessoa:""
    })

    let metodo = "post"

    if(id){
        metodo = "put"
    }

    const handleChange = e =>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()

        fetch(`http://localhost:8080/GsAPI/rest/pessoa/${id ? id : ""}`,{
            method: metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = "/listapessoa"
        })
    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/GsAPI/rest/pessoa/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then(data=>{
                setNovo(data)
            })
        }
    },[id])


    return(
      <div>
          <div id="loginFrame" style={cadastroPessoaFrame}>
              <h2 style={textoFrame} >Cadastro de Pessoa</h2>
          </div>
          <div style={divForm}>
              <form onSubmit={handleSubmit}>
                  <div style={divLabel} >
                      <label htmlFor="">Nome</label>
                      <input 
                          type="text"
                          name="nomePessoa"
                          id="idNomePessoa"
                          value={novo.nomePessoa}
                          style={inputs}
                          onChange={handleChange}
                      />
                  </div>
                  <div style={divLabel2}>
                  <label htmlFor="">Sobre Mim</label>
                      <input 
                          type="text"
                          name="sobreMim"
                          id="idSobreMim"
                          value={novo.sobreMim}
                          style={inputs}
                          onChange={handleChange}
                      />
                  </div>
                  <div style={divLabel2}>
                  <label htmlFor="">RG</label>
                      <input 
                          type="text"
                          name="rgPessoa"
                          id="idRg"
                          value={novo.rgPessoa}
                          style={inputs}
                          onChange={handleChange}
                      />
                  </div>
                  <div>
                      <button style={buttonOk}>Go!</button>
                  </div>
              </form>
          </div>
      </div>
  )
}