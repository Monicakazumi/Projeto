import React, { useEffect, useState } from 'react'
import { H1, Section, Section2 } from './style'

export const VisualizarNiveis = (props) => {

    const [dado, setDado] = useState([])

    const [id] = useState(props.match.params.id)

    useEffect(() => {
        const getNiveis = async () => {
            await fetch("http://localhost/projeto/visualizar_niveis.php?id=" + id)
            .then((resposta) => resposta.json())
            .then((respostaJson) => {
                setDado(respostaJson.niveis)
            })
        }
        getNiveis()
    },[id])

    return(
        <Section>
            <H1>VISUALIZAR</H1>
            <Section2>
                <p><strong>ID: </strong>{dado.id}</p>
                <p><strong>NIVEL: </strong>{dado.nivel}</p>
            </Section2>
        </Section>

    )
}