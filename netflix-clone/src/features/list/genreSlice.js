import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    genres: {
     tv:{ 
         id: 0,
         name:"TV Shows" 
       
      },
      movie:{
        id:0,
        name:"Movies"

      }
    }
}

export const genreSlice = createSlice({
    name:'genre',
    initialState,
    reducers:{
        
        addTvGenres:(state,action)=>{
        
             state.genres.tv = action.payload
             localStorage.setItem("genretv",JSON.stringify(state.genres.tv))
        },
        addMovieGenres:(state,action) =>{
            state.genres.movie = action.payload
            localStorage.setItem("genremovie",JSON.stringify(state.genres.movie))
        }
      
    },
    
})

export const {addTvGenres,addMovieGenres} = genreSlice.actions
export default genreSlice.reducer