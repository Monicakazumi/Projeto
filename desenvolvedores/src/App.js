import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Listar } from './pages/Listar'
import { Cadastrar } from './pages/Cadastrar'
import { Visualizar } from './pages/Visualizar'
import { Editar } from './pages/Editar'
import { ListarNiveis } from './pages/ListarNiveis'
import { CadastrarNiveis } from './pages/CadastrarNiveis'
import { VisualizarNiveis } from './pages/VisualizarNiveis'
import { EditarNiveis } from './pages/EditarNiveis'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listar" component={Listar} />
          <Route path="/cadastrar" component={Cadastrar} />
          <Route path="/visualizar/:id" component={Visualizar} />
          <Route path="/editar/:id" component={Editar} />
          <Route path="/listar_niveis" component={ListarNiveis} />
          <Route path="/cadastrar_niveis" component={CadastrarNiveis} />
          <Route path="/visualizar_niveis/:id" component={VisualizarNiveis} />
          <Route path="/editar_niveis/:id" component={EditarNiveis} />

        </Switch>
      </Router>


    </div>
  )
}

export default App