import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CadastroEmpresa from '../components/CadastroEmpresa';
import CadastroPessoa from '../components/CadastroPessoa';
import CadastroVeiculo from '../components/CadastroVeiculo';
import Home from '../components/Home';
import ListaEmpresa from '../components/ListaEmpresa';
import ListaPessoa from '../components/ListaPessoa';
import ListaVeiculo from '../components/ListaVeiculo';
import Login from '../components/Login';

// import { Container } from './styles';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />

      <Route path="/cadastropessoa" element={<CadastroPessoa />} />
      <Route path="/editarpessoa/:id" element={<CadastroPessoa />} />
      <Route path="/listapessoa" element={<ListaPessoa />} />
      
      <Route path="/cadastroempresa" element={<CadastroEmpresa />} />
      <Route path="/editarempresa/:id" element={<CadastroEmpresa />} />
      <Route path="/listaempresa" element={<ListaEmpresa />} />

      <Route path="/cadastroveiculo" element={<CadastroVeiculo />} />
      <Route path="/editarveiculo/:id" element={<CadastroVeiculo />} />
      <Route path="/listaveiculo" element={<ListaVeiculo />} />

    </Routes>
  )
}