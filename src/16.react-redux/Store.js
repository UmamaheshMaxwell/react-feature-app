import { createStore } from "redux";

const initialState = {
    count: 0
  };

function reducer (state = initialState, action){
    console.log(state, action)
    return state;
}

export const Store = createStore(reducer);


