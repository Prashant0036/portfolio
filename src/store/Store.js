import Slice1Reducers from "./slice1.js";
import { configureStore } from '@reduxjs/toolkit';



    const store = configureStore(

        {
            reducer : {

                slice1:Slice1Reducers
            }


        }
    )
   

export default store;