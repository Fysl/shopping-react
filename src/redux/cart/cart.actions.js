import {CartActionTypes} from './cart.types';

export const toggleCartHidden=()=>({

    type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItems=item =>({

    type:CartActionTypes.ADD_ITEM,
    payload:item
})

export const clearItemfromCart= item =>({
type:CartActionTypes.CLEAR_ITEMS_FROM_CART,
payload:item

})

export const removeItems =item => ({

    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})