import React from 'react'

function reducer(state, action) {
    if (action.type === "ADD_ACCORDION") {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === "DELETE_ACCORDION") {
        return state.filter((item) => item.id !== action.payload)
    }
}

export default reducer;