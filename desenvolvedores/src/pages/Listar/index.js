import React, { useEffect, useState } from 'react'

import { Table, H1, BtnApagar, BtnVisualizar, BtnVoltar, BtnEditar, BtnCadastrar, BtnH1 } from './style'
import { Link } from 'react-router-dom';


export const Listar = () => {

  const [devs, setDevs] = useState([]);

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const getDevs = async () => {
    fetch("http://localhost/projeto/listar.php")
      .then((resposta) => resposta.json())
      .then((respostaJson) => (console.log(respostaJson),
        setDevs(respostaJson)));
  }

  const apagar_dev = async (idDev) => {
    await fetch("http://localhost/projeto/apagar.php?id=" + idDev)
      .then((resposta) => resposta.json())
      .then((respostaJson) => {
        if (respostaJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: respostaJson.mensagem
          })
        } else {
          setStatus({
            type: 'success',
            mensagem: respostaJson.mensagem
          })
          getDevs()
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: "Não apagado, tente mais tarde"
        })
      })
  }

  useEffect(() => {
    getDevs();
  }, [])

  return (
    <div>

      <H1>LISTA DE DESENVOLVEDORES</H1>
      <BtnH1>
        <Link to={"/cadastrar"}>
          <BtnCadastrar type="submit">Cadastrar</BtnCadastrar>
        </Link>
      </BtnH1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID NIVEL</th>
            <th>NOME</th>
            <th>SEXO</th>
            <th>DATA DE NASCIMENTO</th>
            <th>IDADE</th>
            <th>HOBBY</th>
            <th>##</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(devs).map(dev => (
            <tr key={dev.id}>
              <td>{dev.id}</td>
              <td>{dev.id_nivel}</td>
              <td>{dev.nome}</td>
              <td>{dev.sexo}</td>
              <td>{dev.data_nascimento}</td>
              <td>{dev.idade}</td>
              <td>{dev.hobby}</td>
              <td>
                <Link to={"/visualizar/" + dev.id}>
                  <BtnVisualizar type="submit">Visualizar</BtnVisualizar>
                </Link>
                <Link to={"/editar/" + dev.id}>
                  <BtnEditar type="submit">Editar</BtnEditar>
                </Link>
                <BtnApagar onClick={() => apagar_dev(dev.id)}>Apagar</BtnApagar>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <BtnVoltar>
        <Link to={"/"}>
          <BtnCadastrar type="submit">Voltar</BtnCadastrar>
        </Link>
      </BtnVoltar>
    </div >
  )
}