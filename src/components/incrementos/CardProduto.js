import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './CardProduto.module.css'

function CardProduto() {
    return (
        <section className="container-fluid">
             <div className={styles.mais}>
                <h1 className={styles.h1}>Mais Procurados</h1>
            </div>
            <hr></hr>
           
            <div className={styles.card}>
           
                <div>
                    <Card style={{ width: '18rem' }} className={styles.card}>
                        <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/699275/racao_brazilian_foods_foster_caes_adulto_original_premium_5501_1_0fb01a3d40c3c315818682b73ce51e81.jpg" />
                        <Card.Body>
                        <Card.Title>Nome do Produto</Card.Title>
                        <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Card.Text>
                        <Card.Title className={styles.cor}>R$000,00</Card.Title>
                        <select type='number' classname={styles.select}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <Button className={styles.button} variant="primary">Adicionar ao carrinho</Button>
                        </Card.Body>
                    </Card>
                
                </div>
                
                <div>
                <Card style={{ width: '18rem' }} className={styles.card}>
                        <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/699275/antipulgas_e_carrapatos_zoetis_simparic_10mg_para_caes_2_6_a_5kg_615_1_ab06436aa0a8f47fee2a6e1e6c4c7778.jpeg" />
                        <Card.Body>
                        <Card.Title>Nome do Produto</Card.Title>
                        <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Card.Text>
                        <Card.Title className={styles.cor}>R$000,00</Card.Title>
                        <select type='number' classname={styles.select}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <Button className={styles.button} variant="primary">Adicionar ao carrinho</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem' }} className={styles.card}>
                        <Card.Img variant="top" src="https://cobasi.vteximg.com.br/arquivos/ids/939251-400-400/racao-golden-special-para-caes-adultos-frango-e-carne-3310549-15kg-Lado.jpg?v=637855427288230000" />
                        <Card.Body>
                        <Card.Title>Nome do Produto</Card.Title>
                        <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Card.Text>
                        <Card.Title className={styles.cor}>R$000,00</Card.Title>
                        <select type='number' classname={styles.select}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <Button className={styles.button} variant="primary">Adicionar ao carrinho</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem' }} className={styles.card}>
                        <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/699275/racao_nutropica_natural_para_calopsita_300g_2015_1_50382a36f5720e6cdabd9cf86ba70b1b.jpg" />
                        <Card.Body>
                        <Card.Title>Nome do Produto</Card.Title>
                        <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Card.Text>
                        <Card.Title className={styles.cor}>R$000,00</Card.Title>
                        <select type='number' classname={styles.select}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <Button className={styles.button} variant="primary">Adicionar ao carrinho</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
           
      </section>
    );
  }
  
  export default CardProduto;