import styles from './Favoritos.module.css';
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo>Meus Favoritos</Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;