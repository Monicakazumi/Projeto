import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BtnH1, Button, Form, H1, Input, Label, Section, Section2 } from './style'
import { Link } from 'react-router-dom'


export const CadastrarNiveis = () => {

  const [niveis, setNiveis] = useState({
    nivel: ''
  })

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const notify = () => {
    if (status.type === 'erro') {
      toast(<p>{status.mensagem}</p>);
    } else if (status.type === 'success') {
      toast(<p>{status.mensagem}</p>);
    }
  }

  const valor = e => setNiveis({ ...niveis, [e.target.name]: e.target.value })

  const cadastrarNivel = async e => {
    e.preventDefault()

    await fetch("http://localhost/projeto/cadastrar_niveis.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ niveis })
    })
      .then((resposta) => resposta.json())
      .then((respostaJson) => {
        //console.log(respostaJson)
        if (respostaJson) {
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

      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'Não cadastrado, tente mais tarde!'
        })
      })

  }

  return (

    <Section>
      <Section2>
        <H1>CADASTRO DE NIVEIS</H1>
        <BtnH1>
          <Link to={"/listar_niveis"}>
            <Button>Listar</Button>
          </Link>
        </BtnH1>

        <Form onSubmit={cadastrarNivel}>
          <Label><strong>NIVEL: </strong></Label>
          <Input type="text" name="nivel" placeholder="Seu Nível de Senioridade" onChange={valor} />
          <br /><br />
          <Button type="submit" onClick={notify}>Cadastrar</Button>
          <ToastContainer />
        </Form>
      </Section2>
    </Section>
  );
}