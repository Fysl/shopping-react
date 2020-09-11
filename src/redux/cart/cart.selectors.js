import { createSelector } from 'reselect'

const selectCart =state => state.cart;

export const SelectCartItems = createSelector(

    [selectCart],
    (cart) => cart.cartItems
);



export const SelectCartHidden =createSelector(

    [selectCart],
    cart => cart.hidden

)

export const SelectCartItemsCount =createSelector(

    [SelectCartItems],
    cartItems =>cartItems.reduce(
        (accumalatedQty,cartItem) => accumalatedQty + cartItem.quantity,0
    )
)

export const SelectCartTotal = createSelector(

    [SelectCartItems],
       cartItems =>cartItems.reduce(
        (accumalatedQty,cartItem) =>
         accumalatedQty + cartItem.quantity * cartItem.price,
        0
    )
)