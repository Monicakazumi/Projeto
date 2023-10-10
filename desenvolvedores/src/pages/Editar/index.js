import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BtnH1, Button, Form, H1, Input, Label, Section, Section2 } from './style'
import { Link } from 'react-router-dom'

export const Editar = (props) => {

    const [id] = useState(props.match.params.id)
    const [id_nivel, setId_nivel] = useState('')
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [data_nascimento, setDataNascimento] = useState('')
    const [idade, setIdade] = useState('')
    const [hobby, setHobby] = useState('')

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

    const editarDevs = async e => {
        e.preventDefault()

        await fetch("http://localhost/projeto/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, id_nivel, nome, sexo, data_nascimento, idade, hobby })
        }).then((resposta) => resposta.json())
            .then((respostaJson) => {
                console.log(respostaJson)

                if (respostaJson.erro) {
                    setStatus({
                        type: 'error',
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
                    type: 'error',
                    mensagem: "Tente mais tarde"
                })
            })
    }

    useEffect(() => {
        const getDev = async () => {
            await fetch("http://localhost/projeto/visualizar.php?id=" + id)
                .then((resposta) => resposta.json())
                .then((respostaJson) => {
                    setId_nivel(respostaJson.desenvolvedores.id_nivel)
                    setNome(respostaJson.desenvolvedores.nome)
                    setSexo(respostaJson.desenvolvedores.sexo)
                    setDataNascimento(respostaJson.desenvolvedores.data_nascimento)
                    setIdade(respostaJson.desenvolvedores.idade)
                    setHobby(respostaJson.desenvolvedores.hobby)
                })
        }
        getDev()
    }, [id])


    return (
        <Section>
            <Section2>
                <H1>Editar</H1>
                <BtnH1>
                    <Link to={"/listar"}>
                        <Button>Listar</Button>
                    </Link>
                </BtnH1>
                <Form onSubmit={editarDevs} >
                    <Label><strong>NIVEL: </strong></Label>
                    <Input type="text" name="id_nivel" placeholder="Seu Nível de Senioridade" value={id_nivel} onChange={e => setId_nivel(e.target.value)} />
                    <br />
                    <Label><strong>NOME: </strong></Label>
                    <Input type="text" name="nome" placeholder="Seu Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <br />
                    <Label><strong>SEXO: </strong></Label>
                    <Input type="text" name="sexo" placeholder="Seu Sexo" value={sexo} onChange={e => setSexo(e.target.value)} />
                    <br />
                    <Label><strong>DATA DE NASCIMENTO: </strong></Label>
                    <Input type="date" name="data_nascimento" placeholder="Sua Data de Nascimento" value={data_nascimento} onChange={e => setDataNascimento(e.target.value)} />
                    <br />
                    <Label><strong>IDADE</strong></Label>
                    <Input type="number" name="idade" placeholder="Sua Idade" value={idade} onChange={e => setIdade(e.target.value)} />
                    <br />
                    <Label><strong>HOBBY</strong></Label>
                    <Input type="text" name="hobby" placeholder="Seu Hobby" value={hobby} onChange={e => setHobby(e.target.value)} />
                    <br /> <br />
                    <Button type="submit" onClick={notify}>Editar</Button>
                    <ToastContainer />
                </Form>
            </Section2>
        </Section>
    )
}