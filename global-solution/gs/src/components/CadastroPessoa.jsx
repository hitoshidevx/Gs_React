import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonOkPessoa, PessoaFrame, DivForm, DivLabel, DivLabelBelow, InputsForm } from '../style/styled';

export default function CadastroPessoa() {
  
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
          <PessoaFrame id="loginFrame" >
              <h2>Cadastro de Pessoa</h2>
          </PessoaFrame>
          <DivForm>
              <form onSubmit={handleSubmit}>
                  <DivLabel>
                      <label htmlFor="">Nome</label>
                      <InputsForm 
                          type="text"
                          name="nomePessoa"
                          id="idNomePessoa"
                          value={novo.nomePessoa}
                          onChange={handleChange}
                      />
                  </DivLabel>
                  <DivLabelBelow>
                  <label htmlFor="">Sobre Mim</label>
                      <InputsForm 
                          type="text"
                          name="sobreMim"
                          id="idSobreMim"
                          value={novo.sobreMim}
                          onChange={handleChange}
                      />
                  </DivLabelBelow>
                  <DivLabelBelow>
                  <label htmlFor="">RG</label>
                      <InputsForm 
                          type="text"
                          name="rgPessoa"
                          id="idRg"
                          value={novo.rgPessoa}
                          onChange={handleChange}
                      />
                  </DivLabelBelow>
                  <div>
                      <ButtonOkPessoa >Go!</ButtonOkPessoa>
                  </div>
              </form>
          </DivForm>
        </div>
  )
}