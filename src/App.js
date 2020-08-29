import React from 'react';
//import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.util'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }
  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const UserRef = await createUserProfileDocument(userAuth);

        UserRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()

            }
          });
          console.log(this.state)
        });
       
      }
      else {
        this.setState({ currentUser: userAuth })
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>

      </div>
    );
  }

}

export default App;
