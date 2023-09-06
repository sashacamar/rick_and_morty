import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const cantCharacters = 826;
   
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.contenedor}>
         <input type='search' value={id} onChange={handleChange} />
         <button className={style.buttonAdd} onClick={() => onSearch(id)}>AÑADIR</button>
         <button className={style.buttonRandom} onClick={() => onSearch( Math.floor(Math.random() * cantCharacters))}>RANDOM</button>
      </div>
   );
}
