import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddToCardActon } from '../Actions/AddToCardActon';
import PropTypes from 'prop-types';

function Card({movie}) {
    const [data,setData]=useState(movie)

 
    const dispatch =useDispatch();
     const addToCartStore =(data)=>dispatch(AddToCardActon(data))
    
    const handleCheck=(e)=>{
        setData({...data,Select:e.target.checked})
    }

//update the watched state usng this handleWatchList fun
    const handleWatchList=()=>{
        setData({...data,watchedState:!data.watchedState})
      
       console.log(data,'handleWatchList')
    }
 // // addedc the items to store   
    const addtoCart=()=>{
        addToCartStore(data)
        console.log(data,'added')
    }
    // eslint-disable-next-line no-lone-blocks
    {data.watchedState&& addToCartStore(data)}
    console.log(data,"card")
    return (
        <div className="card">
           <div className="card__top">
                <img className="card__poster" src={data.Poster} alt="poster" /> 
           </div>
            <div className="card__bottom">
                <div className="card__details">
                    <div className="card__details__data">
                        <h2>{data.Year}</h2>
                        <h1 className="card__details__data__h1">{data.Title}</h1>
                    </div>
                    <input className="card__details__input" type="checkbox" checked={data.Select} onChange={handleCheck} />
                </div>
                <div className="card__details__button">
                   {data.Select ? <button onClick={addtoCart}>Add my list </button> : <button disabled>Add my list </button>} 
                   {data.Select ?  <button  onClick={handleWatchList}>{data.watchedState ? <span style={{color:"green"}}>successfully Added</span>:'Add watched list'} </button> : <button disabled>Add Wacthed list </button>}
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    movie:PropTypes.object
  };
export default Card
