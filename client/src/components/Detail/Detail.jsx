import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react";
import style from './Detail.module.css'

export default function Detail () {
    const URL_BASE = '/character/';
    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     


    return <div className={style.contenedor}>
        {
            character.name? (
                <>
                <div className={style.contenedorInfo}>
                    <h1>{character.name}</h1>
                    <h2>Status ___ {character.status}</h2>
                    <h2>Specie ___ {character.species}</h2>
                    <h2>Gender ___ {character.gender}</h2>
                    <h2>Origin ___ {character.origin?.name}</h2>
                </div>
                <div className={style.contenedorImg}>
                    <img src={character.image} alt={character.name} />
                </div>
                </>
            ) : (
                <h3>loading...</h3>
            )
        }
    </div>
}