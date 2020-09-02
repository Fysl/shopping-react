import React from 'react';
//import logo from './logo.svg';
import { Switch, Route,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';
import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import {setCurrentUser} from './redux/user/user.actions'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
const {setCurrentUser} =this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const UserRef = await createUserProfileDocument(userAuth);

        UserRef.onSnapshot(snapShot => {
          setCurrentUser({            
              id: snapShot.id,
              ...snapShot.data()            
          });
          console.log(this.state)
        });
       
      }
      else {
        setCurrentUser(userAuth)
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (
            <Redirect to='/' />
            ) : (
            <SignInAndSignUp />
            )} />
        </Switch>

      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({

  currentUser:user.currentUser
})
 

 const mapDispatchToProps = (dispatch) => ({
 
    setCurrentUser:user => 
      dispatch(setCurrentUser(user))
  
});


export default connect(mapStateToProps,mapDispatchToProps)(App) ;
