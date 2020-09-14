export const addItemsToCart =(cartItems,cartItemsToAdd) => {

const ExistingCartItems =cartItems.find(
    cartItem => cartItem.id === cartItemsToAdd.id
);

if(ExistingCartItems){
    return cartItems.map(cartItem =>
        cartItem.id === cartItemsToAdd.id
        ? {...cartItem,quantity:cartItem.quantity +1}
        : cartItem
        )
}
return [...cartItems,{...cartItemsToAdd,quantity:1}];
}

export const removeItemsfromCart =(cartItems,cartItemToRemove) =>{

    const ExistingCartItems =cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if(ExistingCartItems.quantity === 1)
    { 
        return cartItems.filter(cartItem =>cartItem.id !== cartItemToRemove.id)
    }
    else
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? {...cartItem,quantity:cartItem.quantity -1}
        : cartItem
        )

}