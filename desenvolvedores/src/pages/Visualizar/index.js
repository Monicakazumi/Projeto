import React, { useEffect, useState } from 'react'
import { H1, Section, Section2 } from './style'

export const Visualizar = (props) => {

    const [dados, setDados] = useState([])

    const [id] = useState(props.match.params.id)

    useEffect(() => {
        const getDev = async () => {
            await fetch("http://localhost/projeto/visualizar.php?id=" + id)
            .then((resposta) => resposta.json())
            .then((respostaJson) => {
                setDados(respostaJson.desenvolvedores)
            })
        }
        getDev()
    },[id])

    return(
        <Section>
            <H1>VISUALIZAR</H1>
            <Section2>
                <p><strong>ID: </strong>{dados.id}</p>
                <p><strong>NIVEL: </strong>{dados.id_nivel}</p>
                <p><strong>NOME: </strong>{dados.nome}</p>
                <p><strong>SEXO: </strong>{dados.sexo}</p>
                <p><strong>DATA DE NASCIMENTO: </strong>{dados.data_nascimento}</p>
                <p><strong>IDADE: </strong>{dados.idade}</p>
                <p><strong>HOBBY: </strong>{dados.hobby}</p>
            </Section2>
        </Section>

    )
}