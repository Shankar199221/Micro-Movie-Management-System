import React , { useState } from 'react'
import {useSelector} from 'react-redux'
import uuid from 'react-uuid'
import MoviePost from './MoviePost'
import { useHistory } from "react-router-dom";


function MyList() {

    let history = useHistory();
    const data =useSelector(state =>state.getdata.checkedData)
    const [toggleWatched,setToggleWatched]=useState(false)
    
    const checkedData =data.filter((data)=>data.watchedState !== toggleWatched )
    const uncheckedData =data.filter((data)=>data.watchedState === toggleWatched )

  // Back to home  
  function handleClick() {
    history.push("/movielist");
  }
  //toggled the data 
  const handleCheck=(e)=>{
    setToggleWatched(e.target.checked)
  }
    return (
        <div className="mylist">
            <h4 className="mylist__h1" onClick={handleClick}>Back To Home </h4>
            <div className="mylist__toggle">
               toggleSWitched  : &nbsp;
                <input type="checkbox"  checked={toggleWatched} onClick={handleCheck}/>
            </div>
            <ul className='mylist__list'>
               {uncheckedData.map((data)=>{
                   return <li  key={uuid()}>
                        <MoviePost  data={data} />     
                   </li>
                
               })}
               
            </ul>
        </div>
    )
}

export default MyList
