import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CadastroVeiculo() {
    
    const cadastroVeiculoFrame = {
        margin: 0,
        padding: 40,
        fontSize: 50,
        color: 'white',
        fontFamily: 'Montserrat',
        backgroundColor: "#6EC6D9"
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
        backgroundColor: '#6EC6D9',
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
        nomeVeiculo:"",
        sobreVeiculo:"",
        placaVeiculo:""
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

        fetch(`http://localhost:8080/GsAPI/rest/veiculo/${id ? id : ""}`,{
            method: metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = "/listaveiculo"
        })
    }

    useEffect(()=>{
      if(id){
          fetch(`http://localhost:8080/GsAPI/rest/veiculo/${id}`)
          .then((resp)=>{
              return(resp.json())
          }).then(data=>{
              setNovo(data)
          })
      }
  },[id])

  return (
    <div>
        <div id="loginFrame" style={cadastroVeiculoFrame}>
            <h2 style={textoFrame} >Cadastro de Veiculo</h2>
        </div>
        <div style={divForm}>
            <form onSubmit={handleSubmit}>
                <div style={divLabel} >
                    <label htmlFor="">Modelo do Veículo</label>
                    <input 
                        type="text"
                        name="nomeVeiculo"
                        id="idModelo"
                        value={novo.nomeVeiculo}
                        style={inputs}
                        onChange={handleChange}
                    />
                </div>
                <div style={divLabel2}>
                <label htmlFor="">Sobre o Veículo</label>
                    <input 
                        type="text"
                        name="sobreVeiculo"
                        id="idSobreVeiculo"
                        value={novo.sobreVeiculo}
                        style={inputs}
                        onChange={handleChange}
                    />
                </div>
                <div style={divLabel2}>
                <label htmlFor="">Placa do Veículo</label>
                    <input 
                        type="text"
                        name="placaVeiculo"
                        id="idPlacaVeiculo"
                        value={novo.placaVeiculo}
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