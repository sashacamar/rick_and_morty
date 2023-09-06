import style from './Window.module.css'
import repetido from "../../../../imgs/window/repetido.jpg";
import noExiste from "../../../../imgs/window/noExiste.jpg"



export default function Error({error, closeWindow}){

    return (
        <div className={style.contenedorWindow}>
            <div className={style.on}>
                {error === 'repetido'?(<>
                    <img className={style.img} src={repetido} alt="repetido" />
                    <h1 className={style.title}>-ERROR 404- <br></br> <br></br> PERSONAJE REPETIDO</h1>
                </>
                ):(<>
                    <img className={style.img} src={noExiste} alt="no existe" />
                    <h1 className={style.title}>NO SE ENCONTRO NINGUN PERSONAJE CON ESE ID</h1>
                </>
                )}
                <button className={style.close} onClick={closeWindow}>x</button>
            </div>
        </div>
    )
}

