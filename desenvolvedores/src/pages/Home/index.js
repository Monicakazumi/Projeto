import React from 'react'

import { H1, Tela } from './style'
import { Card } from '../Card';
import { Header } from '../Header';
import { Footer } from '../Footer';


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
