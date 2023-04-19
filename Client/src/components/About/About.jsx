import styles from './About.module.css'
export default function About () {
return(
    <div className={styles.contenedorAbout}>
        <img src="https://drive.google.com/uc?id=1jcixRIIRvcWRba0A8hXTOW_vQErHHTse" alt="Emilia Ferrari" className={styles.fotoAbout} />
        <h1>Emilia Ferrari</h1>
        <p>Mi nombre es Emi y soy re piola 😎 <br />Me gustan los gatos, el teatro musical y Spider-Man.</p>
        <button className={styles.botonAbout}><a href="https://www.instagram.com/emilia.ferrari/" target='blank'> Ig de la minita?</a></button>
        <button className={styles.botonAbout}><a href="https://github.com/emiferrari2001" target='blank'>Github</a></button> 


    </div>
)
}