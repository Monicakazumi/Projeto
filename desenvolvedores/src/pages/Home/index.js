import React from 'react'

import { H1, Tela } from './style'
import { Card } from '../../Components/Card';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';


export const Home = () => {

  return (
    <>
      <Tela>
        <Header />
        <H1>Gazin Tech</H1>
        <Card />
        <Footer />
      </Tela>

    </>
  );
}
