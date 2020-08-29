import React from 'react'
import {signInWithGoogle} from '../../firebase/firebase.util'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

class SignIn extends React.Component{

    constructor(props){

        super(props);

        this.state={
            email:'',
            password:''
        }
      
        
        
    }
    handleSubmit = event =>{
        event.preventDefault();
         this.setState({email:'',password:''});
     }
     handleChange= event =>{
         const {value,name}=event.target;
         this.setState({[name]:value})
     }

    render(){

        return(
            <div className='sign-in'>
                <h2>I have an account already.</h2>
              <span>Sign In with your email and password</span>
         
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange} />
               
                <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} />
                 
               <div className='buttons'>
               <CustomButton type="submit">Sign In</CustomButton>

                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                     Sign In With Google
                    </CustomButton>
               </div>
               
            </form>
            </div>
        )
    }
    

}

export default SignIn
