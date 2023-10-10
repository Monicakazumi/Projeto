import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BtnH1, Button, Form, H1, Input, Label, Section, Section2 } from './style'
import { Link } from 'react-router-dom'


export const Cadastrar = () => {

  const [desenvolvedores, setDesenvolvedores] = useState({
    id_nivel: '',
    nome: '',
    sexo: '',
    data_nascimento: '',
    idade: '',
    hobby: '',
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

  const valores = e => setDesenvolvedores({ ...desenvolvedores, [e.target.name]: e.target.value })

  const cadastroDev = async e => {
    e.preventDefault()

    await fetch("http://localhost/projeto/cadastrar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ desenvolvedores })
    })
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
        <H1>CADASTRO DE DESENVOLVEDORES</H1>
        <BtnH1>
          <Link to={"/listar"}>
            <Button>Listar</Button>
          </Link>
        </BtnH1>

        <Form onSubmit={cadastroDev}>
          <Label><strong>NIVEL: </strong></Label>
          <Input type="text" name="id_nivel" placeholder="Seu Nível de Senioridade" onChange={valores} required />
          <br />
          <Label><strong>NOME: </strong></Label>
          <Input type="text" name="nome" placeholder="Seu Nome" onChange={valores} required />
          <br />
          <Label><strong>SEXO: </strong></Label>
          <Input type="text" name="sexo" placeholder="Seu Sexo" onChange={valores} required />
          <br />
          <Label><strong>DATA DE NASCIMENTO: </strong></Label>
          <Input type="date" name="data_nascimento" placeholder="Sua Data de Nascimento" onChange={valores} required />
          <br />
          <Label><strong>IDADE: </strong></Label>
          <Input type="number" name="idade" placeholder="Sua Idade" onChange={valores} required />
          <br />
          <Label><strong>HOBBY: </strong></Label>
          <Input type="text" name="hobby" placeholder="Seu Hobby" onChange={valores} required />
          <br /> <br />
          <Button type="submit" onClick={notify}>Cadastrar</Button>
          <ToastContainer />
        </Form>
      </Section2>
    </Section>
  );
}