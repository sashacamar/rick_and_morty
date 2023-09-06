import { connect } from "react-redux";
import Card from "../Cards/Card/Card";
import './Favorites.molude.css'
import { listFav } from "../redux/actions";
import React, { useEffect } from "react";



const Favorites = ({myFavorites, listFav})=>{
    useEffect(()=>{
        listFav();
    },[listFav])
    return <div className='contenedorFav'>
        {
         myFavorites.map(
            character => <Card key={character.id} 
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            />
            )
      }
    </div>
}

function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites,
    }
}

const mapDispatchToProps = (dispatch) => {

    return{
       listFav: ()=>{dispatch(listFav())}
    }
    
 }

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);