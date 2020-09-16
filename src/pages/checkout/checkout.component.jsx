import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CheckoutItems from '../../components/checkout-Item/checkout-Item.component'
import {SelectCartItems,SelectCartTotal} from '../../redux/cart/cart.selectors'

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss'
const CheckoutPage = ({cartItems,total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
             <span>Product</span>
            </div>
            <div className='header-block'>
             <span>Description</span>
            </div>
            <div className='header-block'>
             <span>Quantity</span>
            </div>
            <div className='header-block'>
             <span>Price</span>
            </div>
            <div className='header-block'>
             <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
            (
                <CheckoutItems key={cartItem.id} cartItem={cartItem} />
            )
                )
        }
        <div className='total'>
    <div>TOTAL:PKR.{total}</div>
    <StripeCheckoutButton price={total} />
        </div>
 
    </div>

)

const mapStateToProps =createStructuredSelector({

    cartItems:SelectCartItems, 
    total:SelectCartTotal
  })

export default connect(mapStateToProps)(CheckoutPage) ;