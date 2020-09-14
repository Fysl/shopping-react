import {combineReducers} from 'redux'
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import MainMenuReducer from './main-menu/main-menu.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
  }

const rootReducer= combineReducers({

    user:userReducer,
    cart:cartReducer,
    MainMenu:MainMenuReducer,
    shop:shopReducer
})

 
 
export default persistReducer(persistConfig,rootReducer);
  