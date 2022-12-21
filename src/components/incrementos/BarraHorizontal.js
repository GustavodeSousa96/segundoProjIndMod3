
import { FaTruck, FaTags, FaBox, FaCreditCard } from 'react-icons/fa';
import styles from './BarraHorizontal.module.css'


const BarraHorizontal = () => {
    return (
        <section className="container-fluid">
            <div className={styles.banner}>
                <div className={styles.fundo}>
                    <div> <FaTruck className={styles.icone}/> 
                        <span class='text'> <strong>Frete Grátis </strong>
                        <br/>
                        <a href='#' target="_blank"> Consulte nossas regras</a>
                        </span>
                    </div>
                    <div> <FaTags className={styles.icone}/> 
                        <span class='text'><strong>5% OFF</strong> 
                        <br/>
                        Retirando na loja.
                        </span>
                    </div>
                    <div> <FaBox className={styles.icone}/> 
                        <span class='text'><strong>Pronta Entrega</strong> 
                        <br/>
                        Em todo o site.
                        </span>
                    </div>
                    <div> <FaCreditCard className={styles.icone}/> 
                        <span class='text'><strong>3x Sem Juros*</strong> 
                        <br/>
                        Parcela mínima de R$40,00.
                        </span>
                    </div>
                </div>
                
            </div>

                 
        </section>
       );
     };
    
export default BarraHorizontal;