import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBack, ButtonListEmpresa, ButtonOkEmpresa, DivForm, DivLabel, DivLabelBelow, EmpresaFrame, InputsForm } from '../style/styled';

export default function CadastroEmpresa() {

    let { id } = useParams()

    const [ novo, setNovo ] = useState({
        codigo: id,
        nomeEmpresa:"",
        sobreEmpresa:"",
        cnpjEmpresa:""
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

        fetch(`https://gs-1tdsr.herokuapp.com/rest/empresa/${id ? id : ""}`,{
            method: metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = "/listaempresa"
        })
    }

    useEffect(()=>{
      if(id){
          fetch(`https://gs-1tdsr.herokuapp.com/rest/empresa/${id}`)
          .then((resp)=>{
              return(resp.json())
          }).then(data=>{
              setNovo(data)
          })
      }
  },[id])

  return (
    <div>
          <EmpresaFrame id="loginFrame">
              <h2>Cadastro de Empresa</h2>
          </EmpresaFrame>
          <DivForm>
              <form onSubmit={handleSubmit}>
                  <DivLabel >
                      <label htmlFor="">Nome da Empresa</label>
                      <InputsForm 
                          type="text"
                          name="nomeEmpresa"
                          id="idNomeEmpresa"
                          value={novo.nomeEmpresa}
                          onChange={handleChange}
                      />
                  </DivLabel>
                  <DivLabelBelow >
                  <label htmlFor="">Sobre a Empresa</label>
                      <InputsForm 
                          type="text"
                          name="sobreEmpresa"
                          id="idSobreEmpresa"
                          value={novo.sobreEmpresa}
                          onChange={handleChange}
                      />
                  </DivLabelBelow>
                  <DivLabelBelow >
                  <label htmlFor="">CNPJ</label>
                      <InputsForm 
                          type="text"
                          name="cnpjEmpresa"
                          id="idCnpj"
                          value={novo.cnpjEmpresa}
                          onChange={handleChange}
                      />
                  </DivLabelBelow>
                  <div>
                      <ButtonOkEmpresa >Go!</ButtonOkEmpresa>
                      <ButtonListEmpresa to="/listaempresa" >Lista de Empresas</ButtonListEmpresa>
                      <ButtonBack to="/home" >Voltar</ButtonBack>
                  </div>
              </form>
          </DivForm>
      </div>
  )
}