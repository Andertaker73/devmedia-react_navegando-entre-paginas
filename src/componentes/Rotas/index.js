import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBackEnd from "../PaginaBackEnd"
import PaginaFrontEnd from "../PaginaFrontEnd"
import PaginaInicial from "../PaginaInicial"

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PaginaInicial />}></Route>
      <Route exact path="/front-end" element={<PaginaFrontEnd />}></Route>
      <Route exact path="/back-end" element={<PaginaBackEnd />}></Route>
    </Routes>
  </BrowserRouter>
)

export default Rotas
