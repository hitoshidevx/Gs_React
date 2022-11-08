import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  ButtonBack, ButtonListVeiculo, ButtonOkVeiculo, DivForm, DivLabel, DivLabelBelow, InputsForm, VeiculoFrame } from '../style/styled';

export default function CadastroVeiculo() {

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

        fetch(`https://gs-1tdsr.herokuapp.com/rest/veiculo/${id ? id : ""}`,{
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
          fetch(`https://gs-1tdsr.herokuapp.com/rest/veiculo/${id}`)
          .then((resp)=>{
              return(resp.json())
          }).then(data=>{
              setNovo(data)
          })
      }
  },[id])

  return (
    <div>
        <VeiculoFrame id="loginFrame">
            <h2 >Cadastro de Veiculo</h2>
        </VeiculoFrame>
        <DivForm>
            <form onSubmit={handleSubmit} autoComplete="off" >
                <DivLabel  >
                    <label htmlFor="">Modelo do Veículo</label>
                    <InputsForm 
                        type="text"
                        name="nomeVeiculo"
                        id="idModelo"
                        value={novo.nomeVeiculo}
                        onChange={handleChange}
                    />
                </DivLabel>
                <DivLabelBelow >
                <label htmlFor="">Sobre o Veículo</label>
                    <InputsForm 
                        type="text"
                        name="sobreVeiculo"
                        id="idSobreVeiculo"
                        value={novo.sobreVeiculo}
                        onChange={handleChange}
                    />
                </DivLabelBelow>
                <DivLabelBelow >
                <label htmlFor="">Placa do Veículo</label>
                    <InputsForm 
                        type="text"
                        name="placaVeiculo"
                        id="idPlacaVeiculo"
                        value={novo.placaVeiculo}
                        onChange={handleChange}
                    />
                </DivLabelBelow>
                <div>
                    <ButtonOkVeiculo >Go!</ButtonOkVeiculo>
                    <ButtonListVeiculo to="/listaveiculo" >Ver Lista de Veículos</ButtonListVeiculo>
                    <ButtonBack to="/home" >Voltar</ButtonBack>
                </div>
            </form>
        </DivForm>
    </div>
  )
}