

export const RemoveDataAction=(id)=>{

    return async  (dispatch)=>{
        dispatch({type:"REMOVE_DATA",payload:id}) 
    }

}
