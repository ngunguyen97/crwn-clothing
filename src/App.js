import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import WithSpinner from './components/with-spinner/with-spinner.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { GlobalStyle } from './global.styles';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import NotFoundPage from './pages/not-found/not-found.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser, selectIsCurrentUserLoaded } from './redux/user/user.selector';

const SignInAndSignUpPageWithSpinner = WithSpinner(SignInAndSignUpPage);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPageWithSpinner isLoading={loading} />
              )
            }
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loading: selectIsCurrentUserLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
