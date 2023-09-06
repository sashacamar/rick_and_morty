import style from './About.module.css'
import image from '../../imgs/home/sasha1.jpg'

export default function About () {
    return<div className={style.textAbout}>
        <img src={image} alt="" />
        <div>
            <p>Creado por: Sasha Camargo</p>
            <p>Tutor: Ariel Romero </p>
            <p>Proyecto integrador del bootcamp soyHenry</p>
            <p>La aplicacion cuenta con formulario de inicio,
                una pagina principal donde se podran filtrar 
                personajes de la serie Rick and Morty 
                con un numero del 1 al 826, definido por el usuario
                en la barra de navegacion o generando un numero al azar; tambien cuenta con
                una seccion de favoritos, donde se mostraran los
                personajes que tengan activo el boton ❤️ en su tarjeta;
                presionando en el nombre de la tarjeta nos llevara
                a una pagina de detalle que englosara los atributos
                del personaje. Cuenta con un boton de LOG OUT que nos
                llevara nuevamente al formulario de LOG IN y por ultimo
                esta pagina de informacion que estas leyendo ;)
            </p>
        </div>
    </div>
}