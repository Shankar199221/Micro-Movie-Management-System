
export const AddToCardActon=(data)=>{

    return async  (dispatch)=>{
        dispatch({type:"CHECKED_DATA",payload:data}) 
    }

}
