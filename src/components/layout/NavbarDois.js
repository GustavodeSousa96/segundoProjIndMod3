import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './NavbarDois.module.css';

import Col from 'react-bootstrap/Col'

function NavbarDois() {
  return (

    <section  className={styles.container_fluid}>
      
      <Navbar bg="dark" variant="dark" className={styles.navbar} >
      <Container>
        
      <div className={styles.menuToggle}>
            {/* <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      --> */}
            <input type="checkbox" />
            {/* <!--
      Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff.
      --> */}
            <span></span>
            <span></span>
            <span></span>
            {/* <!--
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic.
      --> */}
            <ul className={styles.menu}>
            <li className={styles.item}>
              {' '}
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Cães"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Rações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medicamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Caminhas e Casinhas
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className={styles.item}>
               {/*Categoria Gatos*/}
               <NavDropdown
                id="nav-dropdown-dark-example"
                title="Gatos"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Rações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medicamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Caminhas e Casinhas
                </NavDropdown.Item>
              </NavDropdown>
            </li>{' '}
            {/* Serve como ancora */}
            <li className={styles.item}>
               {/*Categoria Pássaros*/}
               <NavDropdown
                id="nav-dropdown-dark-example"
                title="Pássaros"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Rações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medicamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Gaiolas e Ornamentos
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className={styles.item}>
             {/*Categoria Roedores*/}
             <NavDropdown
                id="nav-dropdown-dark-example"
                title="Roedores"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Rações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medicamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Gaiolas e Ornamentos
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            </ul>
          </div>
      <Col xs={6}>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav >
              
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Cães"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Rações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medicamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Caminhas e Casinhas
                </NavDropdown.Item>
              </NavDropdown>
              {/*Categoria Gatos*/}
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Gatos"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Rações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medicamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Caminhas e Casinhas
                </NavDropdown.Item>
              </NavDropdown>
              {/*Categoria Pássaros*/}
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Pássaros"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Rações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medicamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Gaiolas e Ornamentos
                </NavDropdown.Item>
              </NavDropdown>
              {/*Categoria Roedores*/}
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Roedores"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Rações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Medicamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acessórios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Gaiolas e Ornamentos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Col>
          <div>
         <ul className={styles.fale}>
          <li className={styles.list}>Fale conosco</li>
          <li className={styles.list}>Contato</li>
         </ul>
          </div>
      
      </Container>
      
        </Navbar>
    </section>
  );
}

export default NavbarDois;
