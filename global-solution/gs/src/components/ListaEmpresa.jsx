import React, { useEffect, useState } from 'react';
import { ButtonBackList, Card, DeleteButton, Divisor, EditButton, EmpresaFrame, InputButtonDiv, InputList, ResetLinkVehicle } from '../style/styled';
import Footer from './Footer';

export default function ListaEmpresa() {

  const [empresas, setEmpresas] = useState([])
  const [empresaFilter, setEmpresaFilter] = useState([])

    useEffect(()=>{
      fetch("http://localhost:8080/GsAPI/rest/empresa").then((resp)=>{
          return resp.json();
      }).then((resp)=>{
          setEmpresas(resp)
          console.log(resp)
      }).catch((error)=>{
          console.log(error)
      })
  },[])

  const handleDelete = (id)=>{
      fetch(`http://localhost:8080/GsAPI/rest/empresa/${id}`,{
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
      
      <InputButtonDiv>
        <InputList type="text" placeholder="Pesquisar uma empresa..." onChange={e => { setEmpresaFilter(e.target.value) }} />
        <ButtonBackList to="/home">Voltar</ButtonBackList>
      </InputButtonDiv>

      <Divisor >
            {
            empresas.filter((empresa) => {
              if(empresaFilter == "") {
                return empresa
              } else if (empresa.nomeEmpresa.toLowerCase().includes(empresaFilter.toLowerCase( ))) {
                return empresa
              }
            }).map((empresa) => (
              <Card id="cardPessoa" key={empresa.codigo}>
              <h3>{empresa.nomeEmpresa}</h3>
              <h3>{empresa.sobreEmpresa}</h3>
              <h3>{empresa.cnpjEmpresa}</h3>
              <div>
                <EditButton to={`/editarempresa/${empresa.codigo}`} >Editar</EditButton>
                <DeleteButton onClick={handleDelete.bind(this, empresa.codigo)} >Excluir</DeleteButton>
              </div>
            </Card>
            ))
            }
        
      </Divisor>

      <Footer />
    </div>
  )
}