
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './MaisVendidos.module.css'

function MaisVendidos() { 
    return(
        <section>
            <div className={styles.mais}>
                <h1 className={styles.h1}>Mais Vendidos</h1>
            </div>
            <hr></hr>
            <div>
            <div className={styles.card}>
                <div>
                    <Card style={{ width: '18rem' }} className={styles.card}>
                        <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/699275/tapete_higienico_pet_le_gusta_60x90_com_30_unidades_8805_1_c89ee35ad7450a5872cc686d97f92fdd.jpg" />
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
                        <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/699275/180_areia_sanitaria_kets_tradicional_1631_1_76cc00d356041cf77ee99a99d0b22da1.jpeg" />
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
                        <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/699275/180_racao_whiskas_adulto_sache_carne_ao_molho_85g_4475_1_abb64f47f4144cca28ae882b76ef39ea.jpg" />
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
            </div>
        </section>
    )
 }

 export default MaisVendidos;