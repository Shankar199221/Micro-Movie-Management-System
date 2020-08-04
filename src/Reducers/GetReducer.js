const initialState = {
    data:[],
    checkedData:[],
    responce:false
}


export default function GetReducer(state=initialState,action) {
    
    switch(action.type){

      //  //Update the store data accordng to action type  
            case "GET_DATA":
                return {
                    ...state,
                data:[...action.payload]
                }
            case "CHECKED_DATA":
                return {
                    ...state,
                    checkedData:[...state.checkedData,action.payload]
                }
            case "REMOVE_DATA":
                return {
                    checkedData:state.checkedData.filter((data)=> data.id !== action.payload )
                }
            case "GET_RESPONSE" :
                return {
                    ...state,
                    responce:action.payload
                }
    
            default : 
                return state   
    }
}