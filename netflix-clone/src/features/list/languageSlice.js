import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    languages : {
        iso_639_1: "en",
        english_name: "English",
        name: "English"
      }
      
}

export const languageSlice = createSlice({
    name:'language',
    initialState,
    reducers:{
        
        addLanguage:(state,action)=>{
        
             state.languages = action.payload
             localStorage.setItem("language",JSON.stringify(state.languages))
        },
      
    },
    
})

export const {addLanguage} = languageSlice.actions
export default languageSlice.reducer