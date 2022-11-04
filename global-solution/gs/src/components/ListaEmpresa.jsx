import React, { useEffect, useState } from 'react';
import { Card, DeleteButton, Divisor, EditButton, EmpresaFrame } from '../style/styled';

export default function ListaEmpresa() {

  const [empresas, setEmpresas] = useState([])

    useEffect(()=>{
      fetch("https://gs-1tdsr.herokuapp.com/rest/empresa").then((resp)=>{
          return resp.json();
      }).then((resp)=>{
          setEmpresas(resp)
          console.log(resp)
      }).catch((error)=>{
          console.log(error)
      })
  },[])

  const handleDelete = (id)=>{
      fetch(`https://gs-1tdsr.herokuapp.com/rest/empresa/${id}`,{
          method:"delete"
      }).then(()=>{
          window.location = "/listaempresa"
      }).catch((error)=>{
          console.log(error)
      })
  }
  return (
  <div>
      <EmpresaFrame >
        <h2 >Lista de Empresas</h2>
      </EmpresaFrame>

      <Divisor >
            {empresas.map((empresa) => (
              <Card id="cardPessoa" key={empresa.codigo}>
              <h3>{empresa.nomeEmpresa}</h3>
              <h3>{empresa.sobreEmpresa}</h3>
              <h3>{empresa.cnpjEmpresa}</h3>
              <div>
                <EditButton to={`/editarempresa/${empresa.codigo}`} >Editar</EditButton>
                <DeleteButton onClick={handleDelete.bind(this, empresa.codigo)} >Excluir</DeleteButton>
              </div>
            </Card>
            ))}
        
      </Divisor>
    </div>
  )
}