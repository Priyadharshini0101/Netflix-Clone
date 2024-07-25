import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    watchLists :[]
}

export const watchListSlice = createSlice({
    name:'watchList',
    initialState,
    reducers:{
        addWatchList:(state,action)=>{
            console.log(action.payload)
            const watchList = {
                id:nanoid(),
                movie:action.payload.details,
                content:action.payload.content
                
            }
          
            const index = state.watchLists.findIndex((list) => list.movie.id === watchList.movie.id)
           if(index === -1){
                state.watchLists.push(watchList)
           }
            localStorage.setItem("list",JSON.stringify(state.watchLists))
        },
        removeWatchList:(state,action) =>{
            state.watchLists = state.watchLists.filter((watchList) => watchList.movie.id !== action.payload)
            localStorage.setItem("list",JSON.stringify(state.watchLists))
        },
        pushWatchList:(state,action)=>{
            state.watchLists.push(action.payload)
        }
    }
})

export const {addWatchList,removeWatchList,pushWatchList} = watchListSlice.actions
export default watchListSlice.reducer