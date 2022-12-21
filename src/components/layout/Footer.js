//Ícones sendo exportados do react icons(procurar)
import { Navbar } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

import styles from './Footer.module.css';


function Footer() {
  return (
    <Row >
    <section  className={styles.container_fluid}>
     
    <div className={styles.footer}  >
      <Col md='3' sm='3'>
      <div className='box'>
        <div className='title'>
        <h5>Institucional</h5>
          <div className='overflow col-sm-12'>
            
            <ul className={styles.social_list}>
              <li>
                Empresa
              </li>
              <li>
                Como comprar?
              </li>
              <li>
                Política de Privacidade
              </li>
              <li>
                Política de Entrega
              </li>
              <li>
                Pagamento e Reembolso
              </li>
            </ul>
          </div>
      </div>
      </div>
      </Col>

      <Col md='3' sm='3'>
      <div className='box'>
        <div className='title'>
        <h5>Atendimento</h5>
          <div className='overflow'>
            
            <ul className={styles.social_list}>
              <li>
                 (21) 99999-9999
              </li>
              <li>
                sac@fauna.com
              </li>
              <li>
                Política de Privacidade
              </li>
            </ul>
            <hr></hr>
            <p>Atendimento de segunda a sábado - 09 ás 18h</p>
          </div>
      </div>
      </div>
      </Col>
      <Col md='3' sm='3'>
      <div>
        <h5>Redes Sociais</h5>
        <ul className={styles.social_list}>
          <li>
            {' '}
            <FaFacebook />{' '}
          </li>
          <li>
            {' '}
            <FaInstagram />{' '}
          </li>
          <li>
            {' '}
            <FaYoutube />{' '}
          </li>
        </ul>
      </div>
      </Col>

      <Col md='3' sm='3'>
      <div>
        <h5>Formas de Pagamento</h5>
        <ul className={styles.formas}>
          <li>
            <img src='https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqcartaovisa.png?e08a7d7d4cdcbfd2847549898c76b9e8'/>
          </li>
          <li>
          <img src='https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqcartaomastercard.png?e08a7d7d4cdcbfd2847549898c76b9e8'/>
          </li>
          <li>
          <img src='https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqcartaoamex.png?e08a7d7d4cdcbfd2847549898c76b9e8'/>
          </li>
          <li>
          <img src='https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqpix.png?e08a7d7d4cdcbfd2847549898c76b9e8'/>
          </li>
        </ul>
        
      </div>
      </Col>
    </div>
    
    </section>
    </Row>
  );
}

export default Footer;
