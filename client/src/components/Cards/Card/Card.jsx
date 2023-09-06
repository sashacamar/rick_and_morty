import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import React, { useEffect, useState } from "react";


function Card(props) {

   const [isFav, setIsFav] = useState(false);

   useEffect(()=>{
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   },[isFav, props.id, props.myFavorites])

   function handleFavorite () {
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id)
      } 
      else if (!isFav){
         setIsFav(true);
         props.addFav(props)
      }
   }

   return (
      <div className={style.contenedor}>
         {
            isFav ? (
               <button className={style.favorite} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.favorite} onClick={handleFavorite}>🤍</button>
            )
         }
         {
            props.onClose && <button className={style.close} onClick={()=>props.onClose(props.id)}>x</button>
         }
         <Link to={`/detail/${props.id}`}>
            <h2 className={style.nombre}>{props.name}</h2>
         </Link>
         <img src={props.image} alt='' />
         <div className={style.borde1}></div>
         <div className={style.borde2}></div>
         <div className={style.contenedorInfo}>
            <div className={style.contenedorInfo}>
            <h2 className={style.info}>{props.status}</h2>
            </div>
            <div className={style.contenedorInfo}>
            <h2 className={style.info}>{props.species}</h2>
            </div>
         </div>
      </div>
   );
}

function mapStateToProps(state) {
   return{
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {

   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
