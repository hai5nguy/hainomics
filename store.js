
import { createStore } from 'redux'

// var state = {
//     authenticated: false
// }

function reducer(state, action) {
    switch (action.type) {
        case 'DO_SOMETHING_MAN':
            var newState = Object.assign({}, state)
            newState.something = 'has changed'
            return newState
        case 'TEST':
            var newState = Object.assign({}, state)
            newState.login.authenticated = true
            cosnole.log('authenticated true')
            return newState
        default:
            return state
    }
}

var state = {
    login: {
        authenticated: true
    }
}

export const store = createStore(reducer, state);

export const dispatch = store.dispatch;
