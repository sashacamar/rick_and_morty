import styles from "./Login.module.css";
import userImage from '../../imgs/home/sasha1.jpg'

export default function Form ({login}) {
    function handleSubmit(event) {
        event.preventDefault();
        login();
    }

    return <>
        <div className={styles.borderForm1}></div>
        <div className={styles.borderForm2}></div>
    <form className={styles.contenedorForm}   action="">
        <div className={styles.contenedorInputs} >
            <img className={styles.userImage} src={userImage} alt="Sasha" />
            <h1>{'< Rick and Morty APP >'}</h1>
        </div>
        <button 
        className={styles.btn} 
        type="submit"
        onClick={handleSubmit}
        >GET IN</button>
    </form>
    </>
}