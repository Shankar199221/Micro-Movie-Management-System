

export const GetDataAction= (year) => {

      return async  (dispatch)=>{
              const data = fetch(`http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y=${year}`)
                        .then(res => res.json([]))
                        .then(data => {
                           
               const movies = data.Search.map((data)=>({
                      id:data.Title,
                      Poster:data.Poster,
                      Title:data.Title,
                      Year:data.Year,
                      watchedState:false,
                      Select:false,
                          }))
                            console.log(data,"movies")
                            dispatch({type:"GET_DATA",payload:movies})  
                            dispatch({type:"GET_RESPONSE",payload:data.Response})  
                        }).catch((err)=>{
                          console.log(err)
                        })
                        
                      }                    
}