import Card from 'react-bootstrap/Card';
import styles from './MaisVendidos.module.css'

const Depoimentos = () => {
    return (
        <>
        <h1 className={styles.h1}>Depoimentos de nossos clientes</h1>
        <hr></hr>
        <div className={`${styles.card} ${styles.espaco}`}>
           <div>
                <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Júlio</Card.Header>
                <Card.Body>
                <Card.Title>Comprarei mais vezes!</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
                </Card>
           </div>
           <div>
                <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Amanda</Card.Header>
                <Card.Body>
                <Card.Title>Preço muito em conta.</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
                </Card>
           </div>
           <div>
                <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Bárbara</Card.Header>
                <Card.Body>
                <Card.Title>Chegou antes do prazo.</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
                </Card>
           </div>
        </div>
            
            </>

    )
}

export default Depoimentos;