import React, { useEffect, useState } from 'react'

import { Table, H1, BtnApagar, BtnVisualizar, BtnEditar, BtnCadastrar, BtnH1, BtnVoltar } from './style'
import { Link } from 'react-router-dom';


export const ListarNiveis = () => {

  const [niveis, setNiveis] = useState([]);

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const getNiveis= async () => {
    fetch("http://localhost/projeto/listar_niveis.php")
      .then((resposta) => resposta.json())
      .then((respostaJson) => (console.log(respostaJson),
        setNiveis(respostaJson)));
  }

  const apagar_nivel= async (idNivel) => {
    await fetch("http://localhost/projeto/apagar_niveis.php?id=" + idNivel)
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
        }
        getNiveis()
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: "Não apagado, tente mais tarde"
        })
      })
  }

  useEffect(() => {
    getNiveis();
  }, [])

  return (
    <div>
      <H1>LISTA DE NÍVEIS</H1>
      <BtnH1>
        <Link to={"/cadastrar_niveis"}>
          <BtnCadastrar type="submit">Cadastrar</BtnCadastrar>
        </Link>
      </BtnH1>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NIVEL</th>
            <th>###</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(niveis).map(nivel => (
            <tr key={nivel.id}>
              <td>{nivel.id}</td>
              <td>{nivel.nivel}</td>
              <td>
                <Link to={"/visualizar_niveis/" + nivel.id}>
                  <BtnVisualizar type="submit">Visualizar</BtnVisualizar>
                </Link>
                <Link to={"/editar_niveis/" + nivel.id}>
                  <BtnEditar type="submit">Editar</BtnEditar>
                </Link>
                <BtnApagar onClick={() => apagar_nivel(nivel.id)}>Apagar</BtnApagar>
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