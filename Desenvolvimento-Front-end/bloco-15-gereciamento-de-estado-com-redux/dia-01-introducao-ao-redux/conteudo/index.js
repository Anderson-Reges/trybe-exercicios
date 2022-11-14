const Redux = require('redux');

const ESTADO_INICIAL = {
    login: false,
    email: "",
};

const fazerLogin = (email) => ({
    type: "login",
    email,
  });

const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                login: !state.login,
                email: action.email
            };
            default:
                return state;
    }
};

const store = Redux.createStore(reducer);
store.dispatch(fazerLogin("alguem@email.com"));
console.log(store.getState());