import React, { useState,useEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { GetDataAction } from '../Actions/GetDataAction';
import uuid from 'react-uuid'
import Card from './Card';


function MovieList() {

     const [year] =useState([2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020])
     
     const data =useSelector(state =>state.getdata.data)
     const responce =useSelector(state =>state.getdata.responce)
    
      
     const dispatch =useDispatch();
     const getData =(year)=>dispatch(GetDataAction(year))


  // Fecth data from the API and get data from store
        useEffect(()=>{
           getData();
        },[])
      
    const handleChange=(e)=>{ 
        getData(e.target.value);
    }
     
     
    return (
        <div className="app">
           <div className="app__header">
               <div>
                   <h1>Movie App</h1>
               </div>
                    <div className="app__header__right">
                       <div className="app__header__right__1"> 
                           <label htmlFor="Moive"><em>Choose Year:&nbsp;</em></label>
                            <select onChange={handleChange} >
                                {year.map(item => (
                                    <option key={uuid()} name={item} value={item} >
                                    {item}
                                    </option>
                                ))}
                            </select>
                    </div>
                   <Link className="app__header__right__2" to="/mylist" >My List</Link>
                </div>
           </div>
           <div className="app__list">
           
                <div className="app__list__data">
                        {responce && data.map((data)=>{
                            return <Card key={uuid()} movie={data}  />
                        })}
                </div>
           </div>
        </div>
    )
}

export default MovieList
