
import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import pisseRducer from "./reducer/pisseRducer"
import { cartReducer } from "./reducer/cartReducer"

const rotreducer = combineReducers({

    pisseRducer:pisseRducer,
    cartReducer : cartReducer

})

const initialstate = {}
const mddleware = [thunk]


const store = createStore(rotreducer,initialstate , applyMiddleware(...mddleware))


export default store
