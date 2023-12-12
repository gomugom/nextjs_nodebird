import rootReducer from "@/reducers";
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {

    const middleWares = [];

    const enhancer = process.env.NODE_ENV == 'production' ? compose(applyMiddleware(...middleWares)) : composeWithDevTools(applyMiddleware(...middleWares));

    const store = createStore(rootReducer, enhancer);

    return store;

};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
