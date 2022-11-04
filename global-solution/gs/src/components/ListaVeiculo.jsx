import React, { useEffect, useState } from 'react';
import { Card, DeleteButton, Divisor, EditButton, VeiculoFrame } from '../style/styled';

export default function ListaVeiculo() {

  const [veiculos, setVeiculos] = useState([])

    useEffect(()=>{
      fetch("http://localhost:8080/GsAPI/rest/veiculo").then((resp)=>{
          return resp.json();
      }).then((resp)=>{
          setVeiculos(resp)
          console.log(resp)
      }).catch((error)=>{
          console.log(error)
      })
  },[])

  const handleDelete = (id)=>{
      fetch(`http://localhost:8080/GsAPI/rest/veiculo/${id}`,{
          method:"delete"
      }).then(()=>{
          window.location = "/listaveiculo"
      }).catch((error)=>{
          console.log(error)
      })
  }

  return (
    <div>
      <VeiculoFrame >
          <h2 >Lista de Veículos</h2>
      </VeiculoFrame>

      <Divisor >
            {veiculos.map((veiculo) => (
              <Card id="cardPessoa" key={veiculo.codigo}>
              <h3>{veiculo.nomeVeiculo}</h3>
              <h3>{veiculo.sobreVeiculo}</h3>
              <h3>{veiculo.placaVeiculo}</h3>
              <div>
                <EditButton >Editar</EditButton>
                <DeleteButton onClick={handleDelete.bind(this, veiculo.codigo)} >Excluir</DeleteButton>
              </div>
            </Card>
            ))}
        
      </Divisor>
    </div>
  )
}