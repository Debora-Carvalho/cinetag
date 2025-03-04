import styles from './Favoritos.module.css';
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";

function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo>Meus Favoritos</Titulo>
            <section className={styles.container}>
                <Card id='2' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png'/>           
            </section>
        </>
    )
}

export default Favoritos;