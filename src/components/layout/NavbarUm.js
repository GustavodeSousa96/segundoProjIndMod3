import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../img/logo.png'
import styles from './NavbarDois.module.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
//Teste
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function NavbarUm() {
  return (
    <section className={styles.container_fluid}>
      <Row className="justify-content-md-center">
       
      <Navbar bg="dark" variant="dark" className={styles.navbar} >
      <Col xs={2} md={1}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        </Col>
        <Col xs={5} md={7}>
          
              <div className={styles.estilo}>
                <input type="text" placeholder='Pesquisar' className={styles.input} ></input>
                 <Button variant="outline-success">Pesquisar</Button>
              </div>
         
         </Col>
         <Col xs={2}>
             <div className={styles.final}>
                <div>
                  < FaUser className={styles.cart} />
                </div>
                <div>
                  <FaShoppingCart className={styles.cart} />
                </div>
             </div>
           </Col>
      
        </Navbar>
        </Row>
    </section>
  );
}

export default NavbarUm;
