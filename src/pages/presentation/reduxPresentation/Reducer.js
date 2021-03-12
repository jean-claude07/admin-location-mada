import React, {useState} from 'react';
// const [state, setState] = useState();

let id = 2;
const initialState = [
    {
        id: 1,
        completed: false,
        title: "je peut metriser react-redux, coute que coute"
    },
    {
        id: 2,
        completed: true,
        title: "je peut metriser redux, coute que coute"
    }

]

const ADD_ELEMENT = 'ADD_ELEMENT';


function Reducer(state = initialState, action) {
    switch (action.type){
        case ADD_ELEMENT:
            return [...state, {id: ++id, completed: false, ...action.payload}]
        default:
            return state
    }
   
}

const state = Reducer(undefined, {});
console.log(state)
