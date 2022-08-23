import { configureStore, legacy_createStore as createStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'



const store = createStore(rootReducer)
export default store;