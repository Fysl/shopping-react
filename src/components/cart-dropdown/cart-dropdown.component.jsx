import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {withRouter} from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { SelectCartItems } from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems,history,dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?(
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}>

          </CartItem>
          ))
          :
          (<span className='empty-message'>Your Cart is Empty</span>)
          }
    </div>
    <CustomButton onClick={() => {
      dispatch(toggleCartHidden())
      history.push('/checkout')}}>
      Go To CheckOut</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems

})

export default withRouter(connect(mapStateToProps)(CartDropDown));