import React from 'react'
import {Router} from 'react-router-dom'

import banner from './img/banner.png'

//Aqui o import do layout
import Container from './components/layout/Container';
import NavbarDois from './components/layout/NavbarDois';
import Footer from './components/layout/Footer';
import  NavbarUm from './components/layout/NavbarUm';
import Carrossel from './components/incrementos/Carrossel'
import BarraHorizontal from './components/incrementos/BarraHorizontal'
import CardProduto from './components/incrementos/CardProduto';
import Depoimentos from './components/incrementos/Depoimentos';

import styles from './styles.css'
import MaisVendidos from './components/incrementos/MaisVendidos';

function App() {
  return (
    <section>

        <div>
          <NavbarUm></NavbarUm>
          <NavbarDois />
        </div>
        <div>
          <Container customClass="min-height">
            
            <Carrossel />
            <BarraHorizontal />

        <section className="container-fluid">

          <div>
            <CardProduto />
            <CardProduto />
          </div>
          <div className={styles.banner1}>
          <img src={banner} class="d-block w-100" alt="..." />
          </div>

          <div>
            <MaisVendidos />
          </div>

          <div>
            <Depoimentos />
          </div>
        </section>
            

          </Container>
        </div>



        <div>
          <Footer/>
        </div>
      
        
    </section>
    
    
  )
}

export default App;
