import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BtnH1, Button, Form, H1, Input, Label, Section, Section2 } from './style'
import { Link } from 'react-router-dom'

export const EditarNiveis = (props) => {

    const [id] = useState(props.match.params.id)
    const [nivel, setNivel] = useState('')

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

    const EditarNivel = async e => {
        e.preventDefault()

        await fetch("http://localhost/Projeto/editar_niveis.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, nivel })
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
        const getNiveis = async () => {
            await fetch("http://localhost/Projeto/visualizar_niveis.php?id=" + id)
                .then((resposta) => resposta.json())
                .then((respostaJson) => {
                    setNivel(respostaJson.niveis.nivel)
                })
        }
        getNiveis()
    }, [id])


    return (
        <Section>
            <Section2>
                <H1>Editar</H1>
                <BtnH1>
                    <Link to={"/listar_niveis"}>
                        <Button>Listar</Button>
                    </Link>
                </BtnH1>
                <Form onSubmit={EditarNivel} >
                    <Label><strong>NIVEL: </strong></Label>
                    <Input type="text" name="nivel" placeholder="Seu Nível de Senioridade" value={nivel} onChange={e => setNivel(e.target.value)} />
                    <br /> <br />
                    <Button type="submit" onClick={notify}>Editar</Button>
          <ToastContainer />
                </Form>
            </Section2>
        </Section>
    )
}