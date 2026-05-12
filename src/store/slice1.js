import { createSlice } from "@reduxjs/toolkit";
import filterArray from "../components/Skills/Filter/filterArray";
const defaultDomains = filterArray;

const sclicer = createSlice(

{
name : "slice1",
initialState : {isEmpty:true,filteredDomains : []},
reducers:{
AddDomain : (state,actions)=>{state.filteredDomains.push(actions.payload);state.isEmpty=false

   
},
// actions.payload is received argument
RemoveDomain : (state,actions)=>{

    if(!state.isEmpty){

        let valueToRemove = actions.payload;
        state.filteredDomains = state.filteredDomains.filter(item => item !== valueToRemove);
        
    }
    if(state.filteredDomains.length===0){
        state.isEmpty = true;
    }


},
        ResetFilters: (state) => {
            state.filteredDomains = [];
            state.isEmpty = true;
        },
}


}

// actually we want AddDomain,RemoveDomain and filteredDomains array globally available


)

export const { AddDomain, RemoveDomain, ResetFilters } = sclicer.actions;

export default sclicer.reducer;


// if isEmpty true, returns whole array other wise updtaed one

export const selectFilteredDomains = (state) =>
  state.slice1.isEmpty ? defaultDomains : state.slice1.filteredDomains;

