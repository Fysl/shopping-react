import { createSelector } from 'reselect'

const selectCart =state => state.cart;

export const SelectCartItems = createSelector(

    [selectCart],
    (cart) => cart.cartItems
);

export const SelectCartItemsCount =createSelector(

    [SelectCartItems],
    cartItems =>cartItems.reduce(
        (accumalatedQty,cartItems) => accumalatedQty + cartItems.quantity,0
    )
)