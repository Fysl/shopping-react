import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({price})=>{

    const PriceforStripe = price * 100;
    const PublishableKey ='pk_test_51HS9aSIkc14GBe7uWbgSc01oHDWRJL0zgoBKLpVIUF8Ab85ui5mZLadUlvWU317nbudbqSnkyeKl504t2ugZSEMk00MyS3vvXc';
const onToken =token =>{
    console.log(token)
    alert('Payment Successful')
}

    return (
        <StripeCheckout 
        label='Pay Now'
        name='My Cloth Shop'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/PhR.svg'
        description={`Your Total is PKR ${price}`}
        amount={PriceforStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={PublishableKey}
        
        />
    )
}

export default StripeCheckoutButton