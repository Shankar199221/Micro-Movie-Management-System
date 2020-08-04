import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { RemoveDataAction } from '../Actions/RemoveDataAction';
import PropTypes from 'prop-types';

function MoviePost({data}) {

    const [MoviePost,setMoviePost]=useState(data)

    const dispatch =useDispatch();
    const removedata =(id)=>dispatch(RemoveDataAction(id))
   

    const handleWatchedState=(e)=>{
        setMoviePost({...MoviePost,watchedState:e.target.checked})
    }

  ////  // remove item from the list   
    const handleRemove=(id)=>{
             console.log(id,'removed')
             removedata(id)
    }
    return (
        <>
         <div className="moviepost" >
            <div className="moviepost__left">
                <input className="moviepost__input"  type="checkbox" checked={MoviePost.watchedState} onChange={handleWatchedState} />
                <img className="moviepost__img" src={MoviePost.Poster} alt="movie" width="60rem" height="55em" />
                <span className="moviepost__span">{MoviePost.Title}</span>
            </div>
            <button className="moviepost__button"  onClick={()=>handleRemove(MoviePost.id)} >X</button>
         </div>
        
        </>
    )
}
MoviePost.propTypes = {
    movie:PropTypes.object
  };
export default MoviePost
