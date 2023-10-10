import styled from 'styled-components'

export const H1 = styled.h1`
    color: #001781;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 30px;
`

export const Table = styled.table`
    width: 30%;
    margin: auto;
    th {
        background-color: #c4c4d7;
        color: #001781;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px;
    }
    td {
        background-color: #ebebeb;
        color: 3e3e3e;
        font-family: Arial, Helvetica, sans-serif;
        padding: 8px
    }
`

export const BtnH1 = styled.section`
    width: 30%;
    margin: auto;
    display: flex;
    justify-content: right;
    padding-bottom: 10px;
`

export const BtnVoltar = styled.section`
    width: 30%;
    margin: auto;
    display: flex;
    justify-content: left;
    padding-top: 20px;
`

export const BtnCadastrar = styled.button`
    background-color: #ebebeb;
    color: #001781;
    padding: 5px 8px;
    border: 1px solid #001781;
    border-radius: 4px;
    cursor: pointer;
    position: justify-right;
    font-size: 16px;
`

export const BtnVisualizar = styled.button`
    background-color: #fff;
    color: #28a745;
    padding: 5px 8px;
    border: 1px solid #28a745;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`

export const BtnEditar = styled.button`
    background-color: #fff;
    color: #007bff;
    padding: 5px 8px;
    border: 1px solid #007bff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`
export const BtnApagar = styled.button`
    background-color: #fff;
    color: #dc3545;
    padding: 5px 8px;
    border: 1px solid #dc3545;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`