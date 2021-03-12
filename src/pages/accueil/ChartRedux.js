import React, { Component, useReducer } from 'react'

export class ChartRedux extends Component {
    render() {
        const initialState = {count: 0};

        function reducer(state, action) {
        switch (action.type) {
            case 'increment':
            return {count: state.count + 1};
            case 'decrement':
            return {count: state.count - 1};
            default:
            throw new Error();
        }
        }

        return (
            <>
                
            </>
        )
    }
}

export default ChartRedux


