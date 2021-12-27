import { combineReducers } from 'redux';
import productsReducer from './products';
import singleProductReducer from './singleProduct';
import authReducer from './authStore';


const appReducer = combineReducers({
 products:productsReducer,
 product:singleProductReducer,
 authReducer:authReducer
})

export default appReducer
