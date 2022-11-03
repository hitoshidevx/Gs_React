import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CadastroPessoa from '../components/CadastroPessoa';
import Home from '../components/Home';
import ListaPessoa from '../components/ListaPessoa';
import Login from '../components/Login';

// import { Container } from './styles';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastropessoa" element={<CadastroPessoa />} />
      <Route path="/listapessoa" element={<ListaPessoa />} />
    </Routes>
  )
}